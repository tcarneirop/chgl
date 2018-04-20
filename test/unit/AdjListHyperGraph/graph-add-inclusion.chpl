use AdjListHyperGraph;
use CyclicDist;

const vertex_domain = {0..#10};
const edge_domain = {0..#10};

var graph = new AdjListHyperGraph(vertices_dom = vertex_domain, edges_dom = edge_domain);

graph.add_inclusion(0,1);
graph.add_inclusion(graph.vType(8), graph.eType(9));

writeln(graph);