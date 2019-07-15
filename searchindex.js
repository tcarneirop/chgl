Search.setIndex({envversion:46,filenames:["index","modules/src/AdjListHyperGraph","modules/src/AggregationBuffer","modules/src/BinReader","modules/src/Butterfly","modules/src/CHGL","modules/src/CHGL-Server","modules/src/DynamicAggregationBuffer","modules/src/EquivalenceClasses","modules/src/Generation","modules/src/Graph","modules/src/Metrics","modules/src/PropertyMaps","modules/src/TerminationDetection","modules/src/Traversal","modules/src/UnrolledLinkedList","modules/src/Utilities","modules/src/Vectors","modules/src/Visualize","modules/src/WorkQueue"],objects:{"":{"CHGL-Server":[6,0,0,"-"],AdjListHyperGraph:[1,0,0,"-"],AggregationBuffer:[2,0,0,"-"],BinReader:[3,0,0,"-"],Butterfly:[4,0,0,"-"],CHGL:[5,0,0,"-"],DynamicAggregationBuffer:[7,0,0,"-"],EquivalenceClasses:[8,0,0,"-"],Generation:[9,0,0,"-"],Graph:[10,0,0,"-"],Metrics:[11,0,0,"-"],PropertyMaps:[12,0,0,"-"],TerminationDetection:[13,0,0,"-"],Traversal:[14,0,0,"-"],UnrolledLinkedList:[15,0,0,"-"],Utilities:[16,0,0,"-"],Vectors:[17,0,0,"-"],Visualize:[18,0,0,"-"],WorkQueue:[19,0,0,"-"]},"AdjListHyperGraph.AdjListHyperGraph":{destroy:[1,1,1,""],init:[1,1,1,""]},"AdjListHyperGraph.AdjListHyperGraphImpl":{"this":[1,1,1,""],addInclusion:[1,1,1,""],addInclusionBuffered:[1,1,1,""],collapse:[1,1,1,""],collapseEdges:[1,1,1,""],collapseSubsets:[1,1,1,""],collapseVertices:[1,1,1,""],degree:[1,1,1,""],eDescType:[1,2,1,""],eIndexType:[1,2,1,""],edgesDomain:[1,1,1,""],flushBuffers:[1,1,1,""],getEdgeDegrees:[1,1,1,""],getEdges:[1,1,1,""],getInclusions:[1,1,1,""],getLocale:[1,1,1,""],getProperty:[1,1,1,""],getToplexes:[1,7,1,""],getVertexDegrees:[1,1,1,""],getVertices:[1,7,1,""],hasInclusion:[1,1,1,""],incidence:[1,7,1,""],intersection:[1,7,1,""],intersectionSize:[1,1,1,""],isConnected:[1,1,1,""],numEdges:[1,1,1,""],numVertices:[1,1,1,""],removeDuplicates:[1,1,1,""],removeIsolatedComponents:[1,1,1,""],startAggregation:[1,1,1,""],stopAggregation:[1,1,1,""],these:[1,7,1,""],toEdge:[1,1,1,""],toVertex:[1,1,1,""],vDescType:[1,2,1,""],vIndexType:[1,2,1,""],verticesDomain:[1,1,1,""],walk:[1,7,1,""]},"AdjListHyperGraph.Wrapper":{"null":[1,1,1,""],id:[1,2,1,""],idType:[1,2,1,""],nodeType:[1,2,1,""],readWriteThis:[1,1,1,""]},"AggregationBuffer.Aggregator":{"_value":[2,1,1,""],destroy:[2,1,1,""],init:[2,1,1,""],instance:[2,2,1,""],isInitialized:[2,1,1,""],msgType:[2,2,1,""],pid:[2,2,1,""]},"AggregationBuffer.AggregatorImpl":{aggregate:[2,1,1,""],deinit:[2,1,1,""],dsiGetPrivatizeData:[2,1,1,""],dsiPrivatize:[2,1,1,""],flushGlobal:[2,7,1,""],flushLocal:[2,7,1,""],getPrivatizedInstance:[2,1,1,""],init:[2,1,1,""],msgType:[2,2,1,""],size:[2,1,1,""]},"AggregationBuffer.Buffer":{"this":[2,1,1,""],cap:[2,1,1,""],done:[2,1,1,""],getArray:[2,1,1,""],getDomain:[2,1,1,""],getPtr:[2,1,1,""],msgType:[2,2,1,""],readWriteThis:[2,1,1,""],size:[2,1,1,""],these:[2,7,1,""]},"Butterfly.AdjListHyperGraphImpl":{areAdjacentVertices:[4,1,1,""],edgesWithDegree:[4,7,1,""],getAdjacentVertices:[4,7,1,""],getEdgeButterflies:[4,1,1,""],getEdgeCaterpillars:[4,1,1,""],getEdgeMetamorphCoefs:[4,1,1,""],getEdgePerDegreeMetamorphosisCoefficients:[4,1,1,""],getInclusionMetamorphCoef:[4,1,1,""],getInclusionNumButterflies:[4,1,1,""],getInclusionNumCaterpillars:[4,1,1,""],getVertexButterflies:[4,1,1,""],getVertexCaterpillars:[4,1,1,""],getVertexMetamorphCoefs:[4,1,1,""],getVertexPerDegreeMetamorphosisCoefficients:[4,1,1,""],vertexHasNeighbor:[4,1,1,""],verticesWithDegree:[4,7,1,""]},"CHGL-Server":{ACK:[6,4,1,""],ADD_INCLUSION:[6,4,1,""],CREATE_GRAPH:[6,4,1,""],GET_SIZE:[6,4,1,""],SYN:[6,4,1,""],ServerPort:[6,4,1,""],get_hostname:[6,6,1,""],main:[6,6,1,""]},"DynamicAggregationBuffer.DynamicAggregator":{"_value":[7,1,1,""],destroy:[7,1,1,""],init:[7,1,1,""],instance:[7,2,1,""],isInitialized:[7,1,1,""],msgType:[7,2,1,""],pid:[7,2,1,""]},"DynamicAggregationBuffer.DynamicAggregatorImpl":{agg:[7,2,1,""],aggregate:[7,1,1,""],deinit:[7,1,1,""],dsiGetPrivatizeData:[7,1,1,""],dsiPrivatize:[7,1,1,""],dynamicDestBuffers:[7,2,1,""],flushGlobal:[7,7,1,""],flushLocal:[7,7,1,""],getPrivatizedInstance:[7,1,1,""],init:[7,1,1,""],msgType:[7,2,1,""],pid:[7,2,1,""],size:[7,1,1,""]},"DynamicAggregationBuffer.DynamicBuffer":{acquire:[7,1,1,""],append:[7,1,1,""],arr:[7,2,1,""],dom:[7,2,1,""],done:[7,1,1,""],getArray:[7,1,1,""],lock:[7,2,1,""],msgType:[7,2,1,""],release:[7,1,1,""],size:[7,1,1,""]},"EquivalenceClasses.Equivalence":{add:[8,1,1,""],candidates:[8,2,1,""],candidatesDom:[8,2,1,""],cmpType:[8,2,1,""],eqclasses:[8,2,1,""],eqclassesDom:[8,2,1,""],getCandidates:[8,7,1,""],getEquivalenceClasses:[8,7,1,""],init:[8,1,1,""],keyType:[8,2,1,""],readWriteThis:[8,1,1,""],reduction:[8,1,1,""]},"EquivalenceClasses.ReduceEQClass":{accumulate:[8,1,1,""],accumulateOntoState:[8,1,1,""],clone:[8,1,1,""],cmpType:[8,2,1,""],combine:[8,1,1,""],generate:[8,1,1,""],identity:[8,1,1,""],init:[8,1,1,""],keyType:[8,2,1,""],value:[8,2,1,""]},"Generation.DynamicArray":{"this":[9,1,1,""],arr:[9,2,1,""],dom:[9,2,1,""],init:[9,1,1,""]},"Generation.WorkInfo":{numOperations:[9,2,1,""],rngOffset:[9,2,1,""],rngSeed:[9,2,1,""]},"Graph.Graph":{"_value":[10,1,1,""],destroy:[10,1,1,""],init:[10,1,1,""],instance:[10,2,1,""],pid:[10,2,1,""]},"Graph.GraphImpl":{addEdge:[10,1,1,""],cacheValid:[10,2,1,""],cachedNeighborList:[10,2,1,""],cachedNeighborListDom:[10,2,1,""],degree:[10,1,1,""],edgeCounter:[10,2,1,""],flush:[10,1,1,""],getEdges:[10,7,1,""],hasEdge:[10,1,1,""],hg:[10,2,1,""],init:[10,1,1,""],insertAggregator:[10,2,1,""],intersection:[10,1,1,""],intersectionSize:[10,1,1,""],invalidateCache:[10,1,1,""],isCacheValid:[10,1,1,""],neighbors:[10,7,1,""],pid:[10,2,1,""],privatizedCachedNeighborListInstance:[10,2,1,""],privatizedCachedNeighborListPID:[10,2,1,""],simplify:[10,1,1,""],vDescType:[10,2,1,""],validateCache:[10,1,1,""]},"Metrics.ComponentCoalescer":{"this":[11,1,1,""]},"PropertyMaps.PropertyHandle":{get:[12,1,1,""],init:[12,1,1,""],isReady:[12,1,1,""],ready:[12,2,1,""],retVal:[12,2,1,""],set:[12,1,1,""]},"PropertyMaps.PropertyMap":{"_value":[12,1,1,""],clone:[12,1,1,""],destroy:[12,1,1,""],init:[12,1,1,""],isInitialized:[12,1,1,""],mapperType:[12,2,1,""],propertyType:[12,2,1,""]},"PropertyMaps.PropertyMapImpl":{"_flushGetAggregatorBuffer":[12,1,1,""],append:[12,1,1,""],create:[12,1,1,""],flushGlobal:[12,1,1,""],flushLocal:[12,1,1,""],getProperty:[12,1,1,""],getPropertyAsync:[12,1,1,""],init:[12,1,1,""],localProperties:[12,7,1,""],lock:[12,2,1,""],mapper:[12,2,1,""],numProperties:[12,1,1,""],numPropertiesGlobal:[12,1,1,""],propertyType:[12,2,1,""],setProperty:[12,1,1,""],these:[12,7,1,""]},"TerminationDetection.TerminationDetector":{"_value":[13,1,1,""],destroy:[13,1,1,""],init:[13,1,1,""],instance:[13,2,1,""],pid:[13,2,1,""]},"TerminationDetection.TerminationDetectorImpl":{awaitTermination:[13,1,1,""],dsiGetPrivatizeData:[13,1,1,""],dsiPrivatize:[13,1,1,""],finished:[13,1,1,""],getPrivatizedInstance:[13,1,1,""],getStatistics:[13,1,1,""],hasTerminated:[13,1,1,""],init:[13,1,1,""],pid:[13,2,1,""],started:[13,1,1,""],tasksFinished:[13,2,1,""],tasksStarted:[13,2,1,""]},"UnrolledLinkedList.UnrollBlock":{cap:[15,2,1,""],data:[15,2,1,""],eltType:[15,2,1,""],end:[15,2,1,""],next:[15,2,1,""],start:[15,2,1,""]},"UnrolledLinkedList.UnrolledLinkedList":{append:[15,1,1,""],deinit:[15,1,1,""],eltType:[15,2,1,""],head:[15,2,1,""],init:[15,1,1,""],remove:[15,1,1,""],size:[15,1,1,""],sz:[15,2,1,""],these:[15,7,1,""],unrollBlockSize:[15,2,1,""]},"Utilities.ArrayRef":{"_value":[16,1,1,""],init:[16,1,1,""],instance:[16,2,1,""],pid:[16,2,1,""]},"Utilities.Centralized":{init:[16,1,1,""],x:[16,2,1,""]},"Vectors.Vector":{"this":[17,1,1,""],append:[17,1,1,""],arr:[17,2,1,""],cap:[17,2,1,""],clear:[17,1,1,""],dom:[17,2,1,""],eltType:[17,2,1,""],growthRate:[17,2,1,""],init:[17,1,1,""],intersection:[17,1,1,""],intersectionSize:[17,1,1,""],readWriteThis:[17,1,1,""],size:[17,1,1,""],sort:[17,1,1,""],sz:[17,2,1,""],these:[17,7,1,""],toArray:[17,1,1,""]},"WorkQueue.Bag":{add:[19,1,1,""],deinit:[19,1,1,""],eltType:[19,2,1,""],init:[19,1,1,""],maxParallelSegmentSpace:[19,2,1,""],nextStartIdxDeq:[19,1,1,""],nextStartIdxEnq:[19,1,1,""],remove:[19,1,1,""],segments:[19,2,1,""],size:[19,1,1,""],startIdxDeq:[19,2,1,""],startIdxEnq:[19,2,1,""]},"WorkQueue.DuplicateCoalescer":{"this":[19,1,1,""],dupValue:[19,2,1,""],init:[19,1,1,""],t:[19,2,1,""]},"WorkQueue.NopCoalescer":{"this":[19,1,1,""],init:[19,1,1,""],t:[19,2,1,""]},"WorkQueue.WorkQueue":{"_value":[19,1,1,""],colaesceFnType:[19,2,1,""],init:[19,1,1,""],instance:[19,2,1,""],isInitialized:[19,1,1,""],pid:[19,2,1,""],workType:[19,2,1,""]},"WorkQueue.WorkQueueImpl":{addWork:[19,1,1,""],asyncTasks:[19,2,1,""],coalesceFn:[19,2,1,""],destBuffer:[19,2,1,""],destroy:[19,1,1,""],dsiGetPrivatizeData:[19,1,1,""],dsiPrivatize:[19,1,1,""],dynamicDestBuffer:[19,2,1,""],flush:[19,1,1,""],flushLocal:[19,1,1,""],getPrivatizedInstance:[19,1,1,""],getWork:[19,1,1,""],globalSize:[19,1,1,""],init:[19,1,1,""],isEmpty:[19,1,1,""],isShutdown:[19,1,1,""],pid:[19,2,1,""],queue:[19,2,1,""],shutdown:[19,1,1,""],shutdownSignal:[19,2,1,""],size:[19,1,1,""],workPending:[19,1,1,""],workType:[19,2,1,""]},AdjListHyperGraph:{"!=":[1,6,1,""],"+=":[1,6,1,""],"<":[1,6,1,""],"==":[1,6,1,""],">":[1,6,1,""],"_cast":[1,6,1,""],AdjListHyperGraph:[1,5,1,""],AdjListHyperGraphDisableAggregation:[1,4,1,""],AdjListHyperGraphDisablePrivatization:[1,4,1,""],AdjListHyperGraphImpl:[1,3,1,""],Wrapper:[1,5,1,""],fromAdjacencyList:[1,6,1,""],id:[1,6,1,""]},AggregationBuffer:{Aggregator:[2,5,1,""],AggregatorBufferSize:[2,4,1,""],AggregatorDebug:[2,4,1,""],AggregatorImpl:[2,3,1,""],AggregatorMaxBuffers:[2,4,1,""],Buffer:[2,3,1,""],UninitializedAggregator:[2,6,1,""],debug:[2,6,1,""]},BinReader:{DEBUG_BIN_READER:[3,4,1,""],binToGraph:[3,6,1,""],binToHypergraph:[3,6,1,""],debug:[3,6,1,""],main:[3,6,1,""],numEdgesPresent:[3,4,1,""]},Butterfly:{combinations:[4,6,1,""]},DynamicAggregationBuffer:{DynamicAggregator:[7,5,1,""],DynamicAggregatorImpl:[7,3,1,""],DynamicBuffer:[7,3,1,""],UninitializedDynamicAggregator:[7,6,1,""]},EquivalenceClasses:{Equivalence:[8,3,1,""],ReduceEQClass:[8,3,1,""],main:[8,6,1,""]},Generation:{"_round":[9,6,1,""],DynamicArray:[9,5,1,""],GenerationSeedOffset:[9,4,1,""],GenerationUseAggregation:[9,4,1,""],WorkInfo:[9,5,1,""],calculateWork:[9,6,1,""],computeAffinityBlocks:[9,6,1,""],distributedHistogram:[9,6,1,""],generateBTER:[9,6,1,""],generateChungLu:[9,6,1,""],generateChungLuAdjusted:[9,6,1,""],generateChungLuPreScanSMP:[9,6,1,""],generateChungLuSMP:[9,6,1,""],generateErdosRenyi:[9,6,1,""],generateErdosRenyiSMP:[9,6,1,""],histogram:[9,6,1,""],weightedRandomSample:[9,6,1,""]},Graph:{Graph:[10,5,1,""],GraphImpl:[10,3,1,""]},Metrics:{ComponentCoalescer:[11,5,1,""],componentSizeDistribution:[11,6,1,""],edgeComponentSizeDistribution:[11,6,1,""],edgeDegreeDistribution:[11,6,1,""],getEdgeComponentMappings:[11,6,1,""],getEdgeComponents:[11,9,1,""],getVertexComponentMappings:[11,6,1,""],getVertexComponents:[11,9,1,""],vertexComponentSizeDistribution:[11,6,1,""],vertexDegreeDistribution:[11,6,1,""]},PropertyMaps:{"=":[12,6,1,""],PropertyHandle:[12,3,1,""],PropertyMap:[12,5,1,""],PropertyMapImpl:[12,3,1,""],UninitializedPropertyMap:[12,6,1,""]},TerminationDetection:{"<=>":[13,6,1,""],TerminationDetector:[13,5,1,""],TerminationDetectorImpl:[13,3,1,""]},Traversal:{edgeBFS:[14,9,1,""],vertexBFS:[14,9,1,""]},UnrolledLinkedList:{UnrollBlock:[15,3,1,""],UnrolledLinkedList:[15,5,1,""],main:[15,6,1,""]},Utilities:{"_arrayEquality":[16,6,1,""],"_globalIntRandomStream":[16,4,1,""],"_globalRealRandomStream":[16,4,1,""],"_intersectionSizeAtLeast":[16,6,1,""],ArrayRef:[16,5,1,""],Centralized:[16,3,1,""],all:[16,6,1,""],any:[16,6,1,""],arrayEquality:[16,6,1,""],beginProfile:[16,6,1,""],chpl_comm_get_nb:[16,6,1,""],chpl_comm_nb_handle_t:[16,8,1,""],createBlock:[16,6,1,""],createCyclic:[16,6,1,""],debug:[16,6,1,""],endProfile:[16,6,1,""],forEachCorePerLocale:[16,9,1,""],forEachLocale:[16,9,1,""],getAddr:[16,6,1,""],getLines:[16,9,1,""],getLocale:[16,6,1,""],getLocaleID:[16,6,1,""],getNodeID:[16,6,1,""],get_nb:[16,6,1,""],intersection:[16,6,1,""],intersectionSize:[16,6,1,""],intersectionSizeAtLeast:[16,6,1,""],printDebugInformation:[16,4,1,""],profileCommDiagnostics:[16,4,1,""],profileCommDiagnosticsVerbose:[16,4,1,""],profileVisualDebug:[16,4,1,""],randInt:[16,6,1,""],randReal:[16,6,1,""]},Vectors:{Vector:[17,3,1,""],VectorGrowthRate:[17,4,1,""]},Visualize:{main:[18,6,1,""],visualize:[18,6,1,""]},WorkQueue:{"<=>":[19,6,1,""],Bag:[19,3,1,""],DuplicateCoalescer:[19,5,1,""],NopCoalescer:[19,5,1,""],UninitializedWorkQueue:[19,6,1,""],WorkQueue:[19,5,1,""],WorkQueueImpl:[19,3,1,""],WorkQueueNoAggregation:[19,4,1,""],WorkQueueUnlimitedAggregation:[19,4,1,""],doWorkLoop:[19,9,1,""],main:[19,6,1,""],workQueueInitialBlockSize:[19,4,1,""],workQueueMaxBlockSize:[19,4,1,""],workQueueMaxTightSpinCount:[19,4,1,""],workQueueMinTightSpinCount:[19,4,1,""],workQueueMinVelocityForFlush:[19,4,1,""],workQueueVerbose:[19,4,1,""]}},objnames:{"0":["chpl","module"," module"],"1":["chpl","method"," method"],"2":["chpl","attribute"," attribute"],"3":["chpl","class"," class"],"4":["chpl","data"," data"],"5":["chpl","record"," record"],"6":["chpl","function"," function"],"7":["chpl","itermethod"," itermethod"],"8":["chpl","type"," type"],"9":["chpl","iterfunction"," iterfunction"]},objtypes:{"0":"chpl:module","1":"chpl:method","2":"chpl:attribute","3":"chpl:class","4":"chpl:data","5":"chpl:record","6":"chpl:function","7":"chpl:itermethod","8":"chpl:type","9":"chpl:iterfunction"},terms:{"_arrayequ":16,"_cast":1,"_edgesdomain":1,"_eproptyp":1,"_flushgetaggregatorbuff":12,"_globalintrandomstream":16,"_globalrealrandomstream":16,"_intersectionsizeatleast":16,"_iteratorrecord":[16,17],"_not_":1,"_pid":10,"_round":9,"_v1":10,"_v2":10,"_valu":[2,7,10,12,13,14,16,19],"_verticesdomain":1,"_vproptyp":1,"abstract":8,"boolean":4,"case":19,"class":[1,2,7,8,10,12,13,15,16,17,19],"const":[2,3,6,9,16,17,19],"default":[1,9],"export":18,"int":[1,2,4,7,9,10,11,12,13,15,16,17,19],"new":[1,12,19],"null":1,"return":[1,2,4,11],"throw":[1,3,18],"true":[3,4,9,12],"var":[1,2,7,8,9,10,12,13,15,16,17,19],"void":7,"while":1,about:13,access:1,accumul:8,accumulateontost:8,ack:6,acquir:7,acquirelock:12,act:1,activ:1,add:[1,8,19],add_inclus:6,addedg:10,addinclus:1,addinclusionbuff:1,addr:16,addwork:19,adjac:1,adjlisthypergraph:0,adjlisthypergraphdisableaggreg:1,adjlisthypergraphdisableprivat:1,adjlisthypergraphimpl:[1,4],advis:1,after:[1,2,14,16],agg:7,aggreg:[1,2,7,12],aggregationbuff:0,aggregatorbuffers:2,aggregatordebug:2,aggregatorimpl:2,aggregatormaxbuff:2,aliv:13,all:[1,4,7,8,9,11,13,16],alloc:1,allow:1,along:1,alreadi:12,also:1,ani:[1,4,16],anoth:[1,8,13],apart:1,append:[7,12,15,17],approach:[6,19],arbitrarili:8,areadjacentvertic:4,arg:[1,2,3,11,16],argument:[1,4,9,11,12,16],arkouda:6,arr:[7,9,11,16,17,19],arrai:[1,4,11,16],arrayequ:16,arrayref:16,assign:11,associ:[1,4,8],assumpt:1,asynctask:19,atomicbool:[7,10,12,19],automat:1,avoid:7,awaittermin:13,back:2,background:7,bag:19,bagseg:19,balanc:19,base:8,becom:13,been:[6,13],befor:13,begin:13,beginprofil:16,behavior:2,benefit:13,best:19,between:9,bidirect:1,binread:[0,1],bintograph:3,bintohypergraph:3,bipartit:1,block:[1,9],bool:[1,12,13,15,19],both:[1,11,13,14],boundingbox:1,boundscheck:1,breadth:14,brief:6,buf:[7,12],buffer:[1,2,7,12],butterfli:0,c_int:16,c_void_ptr:16,cachedneighborlist:10,cachedneighborlistdom:10,cachevalid:10,calcuat:4,calcul:4,calculatework:9,call:[1,7],can:[1,4,11,13,14,16],candid:[1,8],candidatesdom:8,cannot:1,cap:[2,15,17],captur:16,cardin:1,care:16,cast:4,caus:1,ceas:1,central:16,certain:1,chanc:19,chang:1,chapel:[0,13,16],check:[1,4,16],chgl:0,child:13,chosen:8,chpl__processoratomictyp:[13,19],chpl__tuple_arg_temp:1,chpl_comm_get_nb:16,chpl_comm_nb_handle_t:16,chpl_localeid_t:16,chpl_nodeid_t:16,chunksiz:16,clear:17,client:6,clone:[8,12],cmp:8,cmptype:8,coalescefn:19,code:14,coeffici:4,coforal:1,colaescefntyp:19,collaps:1,collapseedg:1,collapsesubset:1,collapsevertic:1,combin:[4,8],come:7,commid:16,common:[4,11],commun:1,compar:4,compil:[1,11],compon:[1,11,14],componentcoalesc:11,componentmap:11,componentsizedistribut:11,comput:[8,9],computeaffinityblock:9,concept:6,config:[1,2,3,6,9,16,17,19],connect:[6,11],contain:[1,2,4],content:0,contract:1,copi:[1,2,12,16],count:[4,11],counter:13,couponcollector:9,creat:[1,7,9,12,13,16],create_graph:6,createblock:16,createcycl:16,csc:1,csr:1,current:[1,2,8,12],cut:1,cycl:4,cyclic:1,cylc:4,data:[2,7,13,15],dataset:3,date:6,debug:[2,3,16],debug_bin_read:3,decrement:13,deep:12,defaultdist:1,defaultmapp:12,defaultrectangulardist:1,defin:4,degre:[1,4,9,10,11],deinit:[2,7,15,19],delet:1,delimitor:1,depth:14,dequeu:19,desc:1,descriptor:1,desir:[1,4,9],desired_edge_degre:9,desired_vertex_degre:9,desirededgedegre:9,desiredvertexdegre:9,destbuff:19,destroi:[1,2,7,10,12,13,19],detect:[13,14],detector:13,determin:[1,8,12,13,16],disabl:1,distributedhistogram:9,doe:12,dom:[7,9,16,17],domain:[1,8,11,16],done:[2,7,14],dosomethingto:13,dot:18,doworkloop:19,dsigetprivatizedata:[2,7,13,19],dsiprivat:[2,7,13,19],duplic:[1,4,8,12],duplicatecoalesc:19,dupvalu:19,dure:1,dynam:7,dynamicaggreg:7,dynamicaggregationbuff:0,dynamicaggregatorimpl:7,dynamicarrai:9,dynamicbuff:7,dynamicdestbuff:[7,19],each:[1,4,8,13,19],easi:[8,13],eddom:9,edegseq:9,edegseqdom:9,edesc:1,edesctyp:[1,4,14],edg:[1,4,9,11],edgebf:14,edgecomponentsizedistribut:11,edgecount:10,edgedegreedistribut:11,edgedomain:9,edgemap:1,edgescan:9,edgesdomain:[1,9],edgesmap:[1,10],edgeswithdegre:4,edgewrappereindextyp:1,eduplicatehistogram:1,effect:16,effici:8,effort:19,eindextyp:1,element:[1,8,19],els:10,elt:[15,17,19],elttyp:[15,17,19],elttypec_arraycap:15,elttypeunrollblockcap:15,elttypeunrollblockunrollblocks:15,emc:9,emcdom:9,empti:12,enabl:[1,16],end:15,endprofil:16,enough:13,enqueu:19,entir:[9,16],epropmap:1,eproptyp:1,eqclass:8,eqclassesdom:8,equival:[1,8,13],equivalenceclass:0,erdo:9,evalu:16,even:13,evenli:19,everi:[1,4],everyth:10,exampl:[1,8,13],except:16,exist:[1,4,8,12],expand:2,experi:2,explicit:[1,7],explicitli:[1,7],fals:[1,2,3,4,12,16,19],fast:1,fetch:4,few:1,file:[1,16],filenam:[1,18],find:19,finish:13,first:[4,6,14],flush:[1,7,10,19],flushbuff:1,flushglob:[2,7,12],flushloc:[2,7,12,19],followthi:[1,2],foral:[1,10],foreachcoreperlocal:16,foreachlocal:16,format:18,forward:[1,10],found:12,from:[1,9],fromadjacencylist:1,full:14,furthermor:19,futur:16,gener:[0,1,8],generatebt:9,generatechunglu:9,generatechungluadjust:9,generatechungluprescansmp:9,generatechunglusmp:9,generateerdosrenyi:9,generateerdosrenyismp:9,generationseedoffset:9,generationuseaggreg:9,get:[7,12],get_hostnam:6,get_nb:16,get_siz:6,getaddr:16,getadjacentvertic:4,getarrai:[2,7],getcandid:8,getdomain:2,getedg:[1,10],getedgebutterfli:4,getedgecaterpillar:4,getedgecompon:11,getedgecomponentmap:11,getedgedegre:1,getedgemetamorphcoef:4,getedgeperdegreemetamorphosiscoeffici:4,getequivalenceclass:8,getinclus:1,getinclusionmetamorphcoef:4,getinclusionnumbutterfli:4,getinclusionnumcaterpillar:4,getlin:16,getlocal:[1,16],getlocaleid:16,getnodeid:16,getprivatizedinst:[2,7,13,19],getproperti:[1,12],getpropertyasync:12,getptr:2,getstatist:13,gettoplex:1,getvertexbutterfli:4,getvertexcaterpillar:4,getvertexcompon:11,getvertexcomponentmap:11,getvertexdegre:1,getvertexmetamorphcoef:4,getvertexperdegreemetamorphosiscoeffici:4,getvertic:1,getwork:19,given:[1,4,13],globals:19,goe:16,graph:[0,1,9],graphimpl:10,graphviz:18,group:11,growthrat:17,half:1,handl:7,hasedg:10,hash:12,hasinclus:1,hastermin:13,have:[1,4,6,7,13,14,19],head:15,heavili:6,help:19,henc:[1,13,16],here:19,high:16,higher:13,highest:4,histogram:[1,9,11],hold:7,hope:6,hyperedg:[1,8,9,11],ideal:19,ident:8,identifi:1,idtyp:1,idx:[2,9,16,17],implement:[10,13,14],implicit:[1,16],incid:[1,8],includ:[4,9,16],inclus:4,inclusionstoadd:9,increas:[13,19],increment:13,index:[0,1,2,4],init:[1,2,7,8,9,10,12,13,15,16,17,19],initi:12,initials:17,inplac:1,input:4,insertaggreg:10,inspir:6,instanc:[1,2,7,10,13,16,19],instead:1,integ:[1,4],integr:[1,2,4,6,9,10,16,17],intend:6,intent:13,intern:12,intersect:[1,10,11,16,17],intersections:[1,10,16,17],intersectionsizeatleast:16,invalidatecach:10,invok:[1,2],involv:13,iscachevalid:10,isconnect:1,isempti:19,isimmut:1,isiniti:[2,7,12,19],isol:1,isreadi:12,isshutdown:19,issu:7,item:9,iter:[1,2,4,7,8,10,11,12,14,15,16,17,19],iterkind:[1,2,4,7,8,10,12,16,17,19],itself:[1,16],just:13,keep:8,kei:[8,12],keytyp:8,keytypeequival:8,keytypeequivalencecmptyp:8,known:8,larg:1,later:6,leader:8,least:[1,4,11,16],left:13,less:19,level:9,lifetim:16,like:19,link:14,list:[1,4,14],loc:[2,7,12,19],local:[1,2,7,9,12,13,16,19],localespac:7,localproperti:12,locat:13,locid:[2,7,19],lock:[7,12],loop:1,low:16,lower:13,magnitud:14,main:[3,6,8,15,18,19],maintain:1,make:[7,8,13],makerandomstream:16,map:[1,10,11,12],mapper:12,mappertyp:12,matrix:1,maxbackoff:13,maximum:4,maxparallelsegmentspac:19,maxtaskpar:19,memori:1,metamorphosi:4,method:[2,16],metric:0,minbackoff:13,minimum:11,modifi:1,modul:0,mostli:16,msg:[2,7],msgtype:[2,7],multbackoff:13,multipl:[1,13],must:[1,2,9,13,16],mutabl:9,naiv:1,name:1,narg:[2,3],need:[7,14],neighbor:[1,4,10],neighborlist:4,never:7,next:15,nextstartidxdeq:19,nextstartidxenq:19,node:[13,16],nodedata:1,nodetyp:1,nodetypewrapp:1,nodetypewrapperidtyp:1,nop:1,nopcoalesc:19,nor:12,normal:1,note:[1,14,16],now:1,num_edg:9,num_vertic:9,numaggregatedwork:19,number:[1,4,9,11],numedg:[1,10],numedgespres:3,numer:4,numinclus:9,numoper:9,numproperti:12,numpropertiesglob:12,numrandom:9,numvertic:[1,10],object:[1,4],obtain:[1,11,12,16],occur:[13,16],offer:14,onc:13,onli:16,open:7,oper:1,optim:[1,16],order:14,origin:[1,12,16],other:[1,2,7,8,9,10,12,13,17,19],our:19,out:[16,18],over:[2,6,9,11],overhead:1,overlap:19,overwrit:12,own:[7,13],page:0,pair:1,param:[1,2,3,4,6,7,8,9,10,12,15,16,17,19],parent:13,partial:7,particip:1,pass:1,pattern:14,per:4,perform:[1,9,11,12,13],pid:[2,7,10,13,16,19],placement:19,point:1,polici:12,pool:2,possibl:[4,7],print:16,printdebuginform:16,privat:[1,12,13,16],privatizedcachedneighborlistinst:10,privatizedcachedneighborlistpid:10,probabl:9,probtabl:9,proc:[1,2,3,4,6,7,8,9,10,11,12,13,15,16,17,18,19],profilecommdiagnost:16,profilecommdiagnosticsverbos:16,profilevisualdebug:16,progress:[1,7],project:6,proof:6,properti:[1,12],propertyhandl:12,propertymap:[0,1],propertymapimpl:12,propertytyp:12,propertytypepropertymap:12,prototyp:[6,10],provid:[1,8],pure:1,python:6,queri:4,queue:19,raddr:16,randint:16,randreal:16,randvalu:9,rang:[4,16],rather:1,read:1,reader:1,readi:12,readwritethi:[1,2,8,17],real:[4,9,16,17],record:[1,2,7,9,10,11,12,13,15,16,19],recycl:2,reduc:13,reduceeqclass:8,reducescanop:8,reduct:[8,13],ref:[1,2,8,9,12,13,15,16,17,19],refer:[1,12,16],regard:1,releas:7,remot:[2,13,16],remov:[1,15,19],removedupl:1,removeisolatedcompon:1,renyi:9,repres:[1,4],request:7,requir:14,respect:[1,13],result:[1,12],retval:12,right:13,rng:16,rngoffset:9,rngseed:9,robin:19,round:19,safe:1,same:[1,11,12,13],scope:16,search:[0,14],second:4,segment:19,select:8,self:2,send:7,sent:7,separ:1,sequenc:[1,9],sequenti:1,serial:12,serv:1,server:0,serverport:6,set:[1,8,9,12],setproperti:12,sever:1,shallow:[1,12],share:[1,4,12],should:[1,10],shutdown:19,shutdownsign:19,side:16,significantli:11,similar:1,simpl:10,simplifi:[1,10],sink:1,size:[1,2,7,11,15,16,17,19],size_t:16,slower:11,sort:[9,17],sourc:1,spawn:13,speedup:14,start:[13,15],startaggreg:1,startidx:[1,16],startidxdeq:19,startidxenq:19,state:8,statement:1,still:[1,16],stopaggreg:1,storag:1,store:[1,4],strictli:1,string:[1,3,6,16],subject:2,subset:[1,9],sum:1,superset:1,support:10,syn:6,tag:[1,2,4,7,8,10,12,16,17,19],take:6,target:4,targetloc:9,targetlocal:[2,9],task:[7,13],tasksfinish:13,tasksstart:13,term:[1,13],termin:[13,14],terminationdetect:0,terminationdetector:[13,19],terminationdetectorimpl:13,test:4,than:[1,11,13],thei:[1,19],them:[1,11],thi:[1,2,4,6,7,8,9,11,12,14,16,17,19],thread:1,through:1,time:[1,13],toarrai:17,todo:2,toedg:1,toplex:1,tovertex:1,travers:0,treat:16,truth:4,twice:13,two:[1,4,9,13,16],type:[1,2,4,7,8,10,12,15,16,17,19],typeindex:16,uint:19,unaffect:16,undefin:2,under:4,underli:10,uniform:10,uniniti:12,uninitializedaggreg:[2,7,10,19],uninitializeddynamicaggreg:[7,19],uninitializedpropertymap:12,uninitializedworkqueu:19,unmanag:[1,2,7,8,10,13,15,19],unrol:14,unrollblock:15,unrollblocks:15,unrolledlinkedlist:0,until:7,updat:[1,13],user:[1,2,7,16],util:0,val:12,valid:1,validatecach:10,valu:[4,8,12,16],vddom:9,vdebug:16,vdebugnam:16,vdegseq:9,vdegseqdom:9,vdesc:1,vdesctyp:[1,4,10,14],vduplicatehistogram:1,vector:[0,10],vectorgrowthr:17,veri:13,verifi:1,version:1,vertex:[1,4,9,11],vertexbf:14,vertexcomponentsizedistribut:11,vertexdegreedistribut:11,vertexdomain:9,vertexhasneighbor:4,vertexmap:1,vertexscan:9,vertexwrappervindextyp:1,vertic:[1,4,8,9,11],verticesdomain:[1,9,10],verticesmap:[1,10],verticeswithdegre:4,via:1,vindextyp:1,visit:13,visitor:14,visual:0,vmc:9,vmcdom:9,vpropmap:1,vproptyp:1,wai:1,walk:[1,11],warn:16,weightedrandomsampl:9,what:8,when:[7,12],where:[1,4,8,19],whether:[1,12,13,16],which:[1,8,9,12,13,16],within:[1,4],without:[1,4,16],work:[1,19],workinfo:9,workpend:19,workqueu:0,workqueueimpl:19,workqueueinitialblocks:19,workqueuemaxblocks:19,workqueuemaxtightspincount:19,workqueuemintightspincount:19,workqueueminvelocityforflush:19,workqueuenoaggreg:19,workqueueunlimitedaggreg:19,workqueueverbos:19,worktyp:19,worktypeworkqueueimplcolaescefntyp:19,would:1,wq1:19,wq2:19,wrapper:[1,16],yield:[1,4],you:1,zmq:6},titles:["chpldoc documentation","AdjListHyperGraph","AggregationBuffer","BinReader","Butterfly","CHGL","CHGL-Server","DynamicAggregationBuffer","EquivalenceClasses","Generation","Graph","Metrics","PropertyMaps","TerminationDetection","Traversal","UnrolledLinkedList","Utilities","Vectors","Visualize","WorkQueue"],titleterms:{adjlisthypergraph:1,aggregationbuff:2,binread:3,butterfli:4,chgl:[5,6],chpldoc:0,distribut:1,document:0,dual:1,dynamicaggregationbuff:7,equivalenceclass:8,gener:9,global:1,graph:10,hypergraph:1,indic:0,metric:11,parallel:1,propertymap:12,server:6,tabl:0,terminationdetect:13,travers:14,unrolledlinkedlist:15,usag:1,util:16,vector:17,view:1,visual:18,workqueu:19}})