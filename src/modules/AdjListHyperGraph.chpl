/* This is the first data structure for hypergraphs in chgl.  This data
   structure is an adjacency list, where vertices and edges are in the "outer"
   distribution, and their adjacencies are in the "inner" distribution.
   Currently, the assumption is that the inner distribution of adjacencies is
   shared-memory, but it should be possible to easily change it to distributed.
   If we choose to distributed adjacency lists (neighbors), we may choose a
   threshold in the size of the adjacency list that causes the list of neighbors
   to be distributed since we do not want to distribute small neighbor lists.

   This version of the data structure started out in the SSCA2 benchmark and has
   been modified for the label propagation benchmark (both of these benchmarks
   are in the Chapel repository).  Borrowed from the chapel repository. Comes
   with Cray copyright and Apache license (see the Chapel repo).
 */

// TODO: Intents on arguments?  TODO: Graph creation routines.  More todos in
// the Gitlab issues system.  In general, all but the tiniest todos should
// become issues in Gitlab.


/*
   Some assumptions:

   1. It is assumed that push_back increases the amount of available
   memory by some factor.  The current implementation of push_back
   supports this assumption.  Making this assumption allows us not to
   worry about reallocating the array on every push_back.  If we
   wanted to have more fine-grained control over memory, we will have
   to investigate adding mechanisms to control it.
 */

module AdjListHyperGraph {
  use IO;
  use CyclicDist;

  /*
    Record-Wrapped structure
  */
  record AdjListHyperGraph {
    // Instance of our AdjListHyperGraphImpl from node that created the record
    var instance;
    // Privatization Id
    var pid = -1;

    proc _value {
      if pid == -1 {
        halt("AdjListHyperGraph is uninitialized...");
      }

      return chpl_getPrivatizedCopy(instance.type, pid);
    }

    proc init(num_verts = 0, num_edges = 0, map : ?t = new DefaultDist) {
      instance = new AdjListHyperGraphImpl(num_verts, num_edges, map);
      pid = instance.pid;
    }

    proc init(vertices_dom : domain, edges_dom : domain) {
      instance = new AdjListHyperGraphImpl(vertices_dom, edges_dom);
      pid = instance.pid;
    }

    forwarding _value;
  }

  /*
    NodeData: stores the neighbor list of a node.

    This record should really be private, and its functionality should be
    exposed by public functions.
  */
  record NodeData {
    type nodeIdType;

    var ndom = {0..-1};
    var neighborList: [ndom] nodeIdType;

    // This is purely a lock, and the boolean type is just an arbitrary choice.
    // TBD: Is there a better lock?
    var lock$: atomic bool;

    proc numNeighbors() return ndom.numIndices;

    inline proc acquire() {
      while lock$.testAndSet() {
        chpl_task_yield();
      }
    }

    inline proc release() {
      lock$.clear();
    }

    // Initializers are necessary:
    // https://stackoverflow.com/questions/49682634/domain-resizing-on-an-array-of-records-hangs
    // Since they are rather boring, it could be better if at some point they
    // were generated by the compiler.

    /*
      Generic initializer
    */
    proc init(type nodeIdType) {
      this.nodeIdType = nodeIdType;
    }

    /* This copy initializer is not intended to be parallel-safe and may be
       incorrect if `other` is being modified at assign.  If we do not have this
       initializer, copy constructors cause problems with the sync variable
       where it gets emptied by copy constructors.  If it was not for the sync
       variable, we probably do not need these initializers specified
       explicitly.
    */
    proc init(other: AdjListHyperGraph) {
      // Lock the other.  This makes the copy construction parallel-safe with
      // respect to ``other`` and may be a bit of an overkill.
      Debug.contentionCheck(other.lock$.isFull);
      other.acquire();
      this.nodeIdType = other.nodeIdType;
      this.ndom = other.ndom;
      this.neighborList = other.neighborList;
      // release the lock
      other.clear();
      // this.lock$ will be assigned by the default initializer
    }

    /*
      This method is not parallel-safe with concurrent reads, but it is
      parallel-safe for concurrent writes.
    */
    proc addNodes(vals) {
      on this {
        Debug.contentionCheck(lock$);
        acquire(); // acquire lock
        neighborList.push_back(vals);
        release(); // release the lock
      }
    }

    proc readWriteThis(f) {
      on this {
        f <~> new ioLiteral("{ ndom = ")
        	<~> ndom
        	<~> new ioLiteral(", neighborlist = ")
        	<~> neighborList
        	<~> new ioLiteral(", lock$ = ")
        	<~> lock$.read()
        	<~> new ioLiteral("(isFull: ")
        	<~> lock$.read()
        	<~> new ioLiteral(") }");
      }
    }
  } // record

  /*
    Assignment operator for NodeData.

    Assignment is parallel-safe with respect to adding nodes and other write
    operations on NodeData, but attempt at circular assignment may read to
    deadlock (e.g., ``a = b`` in parallel with ``b = a``).
  */
  proc =(ref lhs: NodeData, ref rhs: NodeData) {
    Debug.contentionCheck(lhs.lock$);
    Debug.contentionCheck(rhs.lock$);
    lhs.acquire(); // lock lhs
    rhs.acquire(); // lock rhs
    lhs.ndom = rhs.ndom;
    lhs.neighborList = rhs.neighborList;
    lhs.release(); // release lhs
    rhs.release(); // release rhs
  }

  record Vertex {}
  record Edge   {}

  record Wrapper {
    type nodeType;
    type idType;
    var id: idType;


    /*
      Based on Brad's suggestion:

      https://stackoverflow.com/a/49951164/594274

      The idea is that we can call a function on the type.  In the
      cases where type is instantiated, we will know `nodeType` and
      `idType`, and we can just refer to them in our make method.
    */
    proc type make(id) {
      return new Wrapper(nodeType, idType, id);
    }
  }

  proc _cast(type t: Wrapper(?nodeType, ?idType), id) {
    return t.make(id);
  }

  proc id ( wrapper ) {
    return wrapper.id;
  }

  /*
     Adjacency list hypergraph.

     The storage is an array of NodeDatas.  The edges array stores edges, and
     the vertices array stores vertices.  The storage is similar to a
     bidirectional bipartite graph.  Every edge has a set of vertices it
     contains, and every vertex has a set of edges it participates in.  In terms
     of matrix storage, we store CSR and CSC and the same time.  Storing
     strictly CSC or CSR would allow cutting the storage in half, but for now
     the assumption is that having the storage go both ways should allow
     optimizations of certain operations.
  */
  class AdjListHyperGraphImpl {
    var vertices_dom : domain(1); // domain of vertices
    var edges_dom : domain(1); // domain of edges

    var localVerticesDom;
    var localEdgesDom;

    // Privatization id
    var pid = -1;

    type vIndexType = index(vertices_dom);
    type eIndexType = index(edges_dom);
    type vDescType = Wrapper(Vertex, vIndexType);
    type eDescType = Wrapper(Edge, eIndexType);

    var vertices: [vertices_dom] NodeData(eDescType);
    var edges: [edges_dom] NodeData(vDescType);

    // Initialize a graph with initial domains
    proc init(num_verts = 0, num_edges = 0, map : ?t = new DefaultDist) {
      var vertices_dom = {0..#num_verts} dmapped new dmap(map);
      var edges_dom = {0..#num_edges} dmapped new dmap(map);
      init(vertices_dom, edges_dom);
    }

    proc init(vertices_dom : domain, edges_dom : domain) {
      this.vertices_dom = vertices_dom;
      this.edges_dom = edges_dom;
      this.localVerticesDom = vertices_dom.localSubdomain();
      this.localEdgesDom = edges_dom.localSubdomain();

      complete();

      this.pid = _newPrivatizedClass(this);
    }

    proc init(other, pid) {
      this.localVerticesDom = other.localVerticesDom;
      this.localEdgesDom = other.localEdgesDom;

      complete();   

      // Initialize arrays to point to the original's array instance
      this.pid = pid;
      this.vertices.pid = other.vertices.pid;
      this.vertices._instance = other.vertices._instance;
      this.edges.pid = other.edges.pid;
      this.edges._instance = other.edges._instance;
    }

    proc verticesDomain {
      return this.vertices.domain;
    }

    proc localVerticesDomain {
      return this.localVerticesDom;
    }

    proc edgesDomain {
      return this.edges.domain;
    }

    proc localEdgesDomain {
      return this.localEdgesDom;
    }

    pragma "no doc"
    proc dsiPrivatize(pid) {
      return new AdjListHyperGraphImpl(this, pid);
    }

    pragma "no doc"
    proc dsiGetPrivatizeData() {
      return pid;
    }

    pragma "no doc"
    inline proc getPrivatizedThis {
      return chpl_getPrivatizedCopy(this.type, pid);
    }


    iter getEdges(param tag : iterKind) where tag == iterKind.standalone {
      forall e in edges_dom do yield e;
    }

    iter getEdges() {
      for e in edges_dom do yield e;
    }

    iter getVertices(param tag : iterKind) where tag == iterKind.standalone {
      forall v in vertices_dom do yield v;
    }

    iter getVertices() {
      for v in vertices_dom do yield v;
    }

    proc numVertices {
      return this.vertices.domain.size;
    }

    proc numEdges {
      return this.edges.domain.size;
    }


    /*
      The inclusions access methods should not return a modifiable reference to
      the internal array, or at least this should not be a part of a public
      iterface.  I don't think that that there is a way to have private class
      methods yet, so this is all exposed to the user.
    */
    proc _inclusions ( e : eDescType ) ref {
      return edges(e.id).neighborList;
    }

    proc _inclusions ( v : vDescType ) ref {
      return vertices(v.id).neighborList;
    }

    // Resize the edges array
    // This is not parallel safe AFAIK.
    // No checks are performed, and the number of edges can be increased or decreased
    proc resize_edges(size) {
      edges_dom = {0..(size-1)};
    }

    // Resize the vertices array
    // This is not parallel safe AFAIK.
    // No checks are performed, and the number of vertices can be increased or decreased
    proc resize_vertices(size) {
      vertices_dom = {0..(size-1)};
    }

    proc check_unique(vertex,edge){
      var retval = true;
      ref vertexData = vertices(vertex);
      on vertexData do (retval, _) = vertexData.neighborList.find(toEdge(edge));
      return retval;
    }


    // TODO: Need add_inclusion_bulk!
    inline proc add_inclusion(vertex, edge) {
      const vDesc = vertex: vDescType;
      const eDesc = edge: eDescType;
      vertices(vDesc.id).addNodes(eDesc);
      edges(eDesc.id).addNodes(vDesc);
    }

    // Runtime version
    inline proc toEdge(desc : integral) {
      return desc : eDescType;
    }

    // Bad argument...
    inline proc toEdge(desc) param {
      compilerError("toEdge(" + desc.type : string + ") is not permitted, required"
      + " 'integral' type ('int(8)', 'int(16)', 'int(32)', 'int(64)')");
    }

    // Runtime version
    inline proc toVertex(desc : integral) {
      return desc : vDescType;
    }

    // Bad argument...
    inline proc toVertex(desc) param {
      compilerError("toVertex(" + desc.type : string + ") is not permitted, required"
      + " 'integral' type ('int(8)', 'int(16)', 'int(32)', 'int(64)')");
    }

    // Obtains list of all degrees; not thread-safe if resized
    proc getVertexDegrees() {
      // The returned array is mapped over the same domain as the original
      // As well a *copy* of the domain is returned so that any modifications to
      // the original are isolated from the returned array.
      var degreeDom = vertices_dom;
      var degreeArr : [degreeDom] int(64);

      // Note: If set of vertices or its domain has changed this may result in errors
      // hence this is not entirely thread-safe yet...
      forall (degree, v) in zip(degreeArr, vertices) {
        degree = v.neighborList.size;
      }

      return degreeArr;
    }

    // TODO: Need a better way of getting vertex... right now a lot of casting has to
    // be done and we need to return the index (from its domain) rather than the
    // vertex itself...
    iter forEachVertexDegree() : (vDescType, int(64)) {
      for (vid, v) in zip(vertices_dom, vertices) {
        yield (vid : vDescType, v.neighborList.size);
      }
    }

    iter forEachVertexDegree(param tag : iterKind) : (vDescType, int(64))
      where tag == iterKind.standalone {
        forall (vid, v) in zip(vertices_dom, vertices) {
          yield (vid : vDescType, v.neighborList.size);
        }
    }

    // Obtains list of all degrees; not thread-safe if resized
    proc getEdgeDegrees() {
      // The returned array is mapped over the same domain as the original
      // As well a *copy* of the domain is returned so that any modifications to
      // the original are isolated from the returned array.
      var degreeDom = edges_dom;
      var degreeArr : [degreeDom] int(64);

      // Note: If set of vertices or its domain has changed this may result in errors
      // hence this is not entirely thread-safe yet...
      forall (degree, e) in zip(degreeArr, edges) {
        degree = e.neighborList.size;
      }

      return degreeArr;
    }

    iter forEachEdgeDegree() : (eDescType, int(64)) {
      for (eid, e) in zip(edges_dom, edges) {
        yield (eid : eDescType, e.neighborList.size);
      }
    }

    iter forEachEdgeDegree(param tag : iterKind) : (eDescType, int(64))
      where tag == iterKind.standalone {
        forall (eid, e) in zip(edges_dom, edges) {
          yield (eid : eDescType, e.neighborList.size);
        }
    }

    // for desc in graph.inclusions(nodeDesc) do ...
    iter inclusions(desc) where desc.type == vDescType || desc.type == eDescType {
      for _desc in _inclusions(desc) do yield _desc;
    }


    // forall desc in graph.inclusions(nodeDesc) do ...
    iter inclusions(desc, param tag : iterKind) where
      (desc.type == vDescType || desc.type == eDescType)
        && tag == iterKind.standalone {
      forall _desc in _inclusions(desc) do yield _desc;
    }

    // Bad argument
    iter inclusions(arg) {
      compilerError("inclusions(" + arg.type : string + ") not supported, "
      + "argument must be of type " + vDescType : string + " or " + eDescType : string);
    }

    // Bad Argument
    iter inclusions(arg, param tag : iterKind) where tag == iterKind.standalone {
      compilerError("inclusions(" + arg.type : string + ") not supported, "
      + "argument must be of type " + vDescType : string + " or " + eDescType : string);
    }

    // TODO: for something in graph do ...
    iter these() {

    }

    // TODO: forall something in graph do ...
    iter these(param tag : iterKind) where tag == iterKind.standalone {

    }

    // TODO: graph[something] = somethingElse;
    // TODO: Make return ref, const-ref, or by-value versions?
    proc this() {

    }
  } // class Graph

  config param AdjListHyperGraphBufferSize = 1024 * 1024;

  // Buffer of (vertex, edge) tuples
  record Buffer {
    type vDescType;
    type eDescType;

    // Object called to handle emptying buffer when full...
    var collectFn;

    // Note: Tuples are significantly faster than arrays... See below link...
    // https://chapel-lang.org/perf/chapcs/?graphs=arrayvstupleserialaccesses
    var _buffer :  AdjListHyperGraphBufferSize * (vDescType, eDescType);
    var size : atomic int;
    var filled : atomic int;

    proc buffer(v : vDescType, e : eDescType) {
      // Get our buffer slot
      var idx = size.fetchAdd() + 1;
      while idx > AdjListHyperGraphBufferSize {
        chpl_task_yield();
        idx = size.fetchAdd() + 1;
      }
      assert(idx > 0);
      
      // Fill our buffer slot and notify as filled...
      _buffer[idx] = (v,e);
      var nFilled = filled.fetchAdd(1) + 1;

      // Check if we filled the buffer...
      if nFilled == AdjListHyperGraphBufferSize {
        // Empty the buffer...
        collectFn(_buffer);
        filled.write(0);
        size.write(0);
      }
    }
  }

  module Debug {
    // Determines whether or not we profile for contention...
    config param ALHG_PROFILE_CONTENTION : bool;
    // L.J: Keeps track of amount of *potential* contended accesses. It is not absolute
    // as we check to see if the lock is held prior to attempting to acquire it.
    var contentionCnt : atomic int;

    inline proc contentionCheck(ref lock : atomic bool) where ALHG_PROFILE_CONTENTION {
      if lock.read() {
        contentionCnt.fetchAdd(1);
      }
    }

    inline proc contentionCheck(ref lock : atomic bool) where !ALHG_PROFILE_CONTENTION {
      // NOP
    }
  }

  /* /\* iterate over all neighbor IDs */
  /*  *\/ */
  /* private iter Neighbors( nodes, node : index (nodes.domain) ) { */
  /*   for nlElm in nodes(node).neighborList do */
  /*     yield nlElm(1); // todo -- use nid */
  /* } */

  /* /\* iterate over all neighbor IDs */
  /*  *\/ */
  /* iter private Neighbors( nodes, node : index (nodes), param tag: iterKind) */
  /*   where tag == iterKind.leader { */
  /*   for block in nodes(v).neighborList._value.these(tag) do */
  /*     yield block; */
  /* } */

  /* /\* iterate over all neighbor IDs */
  /*  *\/ */
  /* iter private Neighbors( nodes, node : index (nodes), param tag: iterKind, followThis) */
  /*   where tag == iterKind.follower { */
  /*   for nlElm in nodes(v).neighborList._value.these(tag, followThis) do */
  /*     yield nElm(1); */
  /* } */

  /* /\* return the number of neighbors */
  /*  *\/ */
  /* proc n_Neighbors (nodes, node : index (nodes) )  */
  /*   {return Row (v).numNeighbors();} */


  /*   /\* how to use Graph: e.g. */
  /*      const vertex_domain =  */
  /*      if DISTRIBUTION_TYPE == "BLOCK" then */
  /*      {1..N_VERTICES} dmapped Block ( {1..N_VERTICES} ) */
  /*      else */
  /*      {1..N_VERTICES} ; */

  /*      writeln("allocating Associative_Graph"); */
  /*      var G = new Graph (vertex_domain); */
  /*   *\/ */

  /*   /\* Helps to construct a graph from row, column, value */
  /*      format.  */
  /*   *\/ */
  /* proc buildUndirectedGraph(triples, param weighted:bool, vertices) where */
  /*   isRecordType(triples.eltType) */
  /*   { */

  /*     // sync version, one-pass, but leaves 0s in graph */
  /*     /\* */
  /* 	var r: triples.eltType; */
  /* 	var G = new Graph(nodeIdType = r.to.type, */
  /* 	edgeWeightType = r.weight.type, */
  /* 	vertices = vertices); */
  /* 	var firstAvailNeighbor$: [vertices] sync int = G.initialFirstAvail; */
  /* 	forall trip in triples { */
  /*       var u = trip.from; */
  /*       var v = trip.to; */
  /*       var w = trip.weight; */
  /*       // Both the vertex and firstAvail must be passed by reference. */
  /*       // TODO: possibly compute how many neighbors the vertex has, first. */
  /*       // Then allocate that big of a neighbor list right away. */
  /*       // That way there will be no need for a sync, just an atomic. */
  /*       G.Row[u].addEdgeOnVertex(v, w, firstAvailNeighbor$[u]); */
  /*       G.Row[v].addEdgeOnVertex(u, w, firstAvailNeighbor$[v]); */
  /* 	}*\/ */

  /*     // atomic version, tidier */
  /*     var r: triples.eltType; */
  /*     var G = new Graph(nodeIdType = r.to.type, */
  /*                       edgeWeightType = r.weight.type, */
  /*                       vertices = vertices, */
  /*                       initialLastAvail=0); */
  /*     var next$: [vertices] atomic int; */

  /*     forall x in next$ { */
  /*       next$.write(G.initialFirstAvail); */
  /*     } */

  /*     // Pass 1: count. */
  /*     forall trip in triples { */
  /*       var u = trip.from; */
  /*       var v = trip.to; */
  /*       var w = trip.weight; */
  /*       // edge from u to v will be represented in both u and v's edge */
  /*       // lists */
  /*       next$[u].add(1, memory_order_relaxed); */
  /*       next$[v].add(1, memory_order_relaxed); */
  /*     } */
  /*     // resize the edge lists */
  /*     forall v in vertices { */
  /*       var min = G.initialFirstAvail; */
  /*       var max = next$[v].read(memory_order_relaxed) - 1;  */
  /*       G.Row[v].ndom = {min..max}; */
  /*     } */
  /*     // reset all of the counters. */
  /*     forall x in next$ { */
  /*       next$.write(G.initialFirstAvail, memory_order_relaxed); */
  /*     } */
  /*     // Pass 2: populate. */
  /*     forall trip in triples { */
  /*       var u = trip.from; */
  /*       var v = trip.to; */
  /*       var w = trip.weight; */
  /*       // edge from u to v will be represented in both u and v's edge */
  /*       // lists */
  /*       var uslot = next$[u].fetchAdd(1, memory_order_relaxed); */
  /*       var vslot = next$[v].fetchAdd(1, memory_order_relaxed); */
  /*       G.Row[u].neighborList[uslot] = (v,); */
  /*       G.Row[v].neighborList[vslot] = (u,); */
  /*     } */

  /*     return G; */
  /*   } */
}
