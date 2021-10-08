var selectedNode;
var nodes;
var edges;
var alldata;
var network;
var nodesDataset;
var allNodes;
var edgesDataset;
var url = "https://sdsoknservices.mvbg.org/api/Class/retrieveTopNodes/1000";//"https://localhost:32770/api/Class/retrieveTopNodes/1000";  //"https://maps.mvbg.org/agCaller/api/KGNode/retrieveTopNodes/1000";
// var url = "http://localhost:59034/api/KGNode/retrieveTopNodes/1000";
var ajax = new XMLHttpRequest();
ajax.onload = functionName;
ajax.onerror = errorFunctionName;

function OpenWindow() {
    window.open('http://nvs.nanoos.org/Explorer?action=overlay:liveocean_o2&loc=47.6000,-122.9880&zoom=8', 'Test', 'width=1280,height=1024,scrollbars=no,toolbar=yes,location=yes');
    return false;
}

function OpenWindow2() {
    window.open('https://faculty.washington.edu/pmacc/LO/LiveOcean.html', 'Test', 'width=1280,height=1024,scrollbars=no,toolbar=yes,location=yes');
    return false;
}

function OpenWindow3() {
    window.open('https://faculty.washington.edu/pmacc/', 'Test', 'width=1280,height=1024,scrollbars=no,toolbar=yes,location=yes');
    return false;
}

function startMe() {
    
    ajax.open("GET", url, true);
    ajax.send();
}

function startMe2(newUrl) {
    var nodes = [
        { id: 1, label: "Projects",font: { align: "bottom" } },
        { id: 2, label: "Organizations", font: { align: "bottom" }},
        { id: 3, label: "People", font: { align: "bottom" } },
        { id: 4, label: "South Fork Nooksack temperature TMDL", font: { align: "bottom" } },
        { id: 5, label: "Nooksack Indian Tribe Vulnerability Assessment", font: { align: "bottom" } },
        { id: 6, label: "Massachusetts Bridge movement monitoring project", font: { align: "bottom" } },
        { id: 7, label: "Watershed Characterization project", font: { align: "bottom" } },
        { id: 8, label: "Colin Hume", font: { align: "bottom" }},
        { id: 9, label: "WA Ecology", font: { align: "bottom" } },
        { id: 10, label: "Christina Bandaragoda", font: { align: "bottom" }},
        { id: 11, label: "Nooksack Tribe of Indians", font: { align: "bottom" }},
        { id: 12, label: "Susan Dickerson Lang", font: { align: "bottom" }},
        { id: 13, label: "University of Washington", font: { align: "bottom" } },
        { id: 14, label: "Tim Nyerges", font: { align: "bottom" }}
    ];
    var edges = [
        { from: 1, to: 4, label: "name" },
        { from: 1, to: 5, label: "name" },
        { from: 1, to: 6, label: "name" },
        { from: 1, to: 7, label: "name" },
        { from: 2, to: 9, label: "name" },
        { from: 2, to: 11, label: "name" },
        { from: 2, to: 13, label: "name" },
        { from: 3, to: 8, label: "name" },
        { from: 3, to: 10, label: "name" },
        { from: 3, to: 12, label: "name" },
        { from: 3, to: 14, label: "name" },
        { from: 4, to: 14, label: "worksOn" },
        { from: 5, to: 12, label: "worksOn" },
        { from: 5, to: 10, label: "worksOn" },
        { from: 6, to: 11, label: "worksAt" },
        { from: 7, to: 8, label: "worksOn" },
        { from: 14, to: 13, label: "worksAt" },
        { from: 12, to: 13, label: "worksAt" },
        { from: 10, to: 13, label: "worksAt" },
        { from: 8, to: 9, label: "worksAt" }


    ];

    var container = document.getElementById("mynetwork");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = { physics: false };
    var network = new vis.Network(container, data, options);

 
}

function RenderMaps() {
    require([
        "esri/WebMap",
        "esri/views/MapView"
    ], function (WebMap, MapView) {
        var webmap = new WebMap({
            portalItem: {
                id: "be24ded36fb6467f81b1bffd9c277e04"
            }
        });
        var view = new MapView({
            container: "viewDiv",
            //*** UPDATE ***//
            map: webmap
            //center: [-118.80500,34.02700],
            //zoom: 13
        });

    });
}

function RenderMaps2() {
    require([
        "esri/WebMap",
        "esri/views/MapView"
    ], function (WebMap, MapView) {
        var webmap = new WebMap({
            portalItem: {
                id: "789ba4bf1be64877995a898f0db9ada8"
            }
        });
        var view = new MapView({
            container: "viewDiv",
            //*** UPDATE ***//
            map: webmap
            //center: [-118.80500,34.02700],
            //zoom: 13
        });

    });
}

function RenderMaps3() {
    require([
        "esri/WebMap",
        "esri/views/MapView"
    ], function (WebMap, MapView) {
        var webmap = new WebMap({
            portalItem: {
                id: "1b5199a124544664917d31dc2bb88236"
            }
        });
        var view = new MapView({
            container: "viewDiv",
            //*** UPDATE ***//
            map: webmap
            //center: [-118.80500,34.02700],
            //zoom: 13
        });

    });
}

function functionName() {
    console.log(this); // log the response
    if (this.status == 200) { // request succeeded
        alldata = JSON.parse(this.response);
        console.log(alldata);
        eval(alldata);
        var highlightActive = false;
        nodesDataset = new vis.DataSet(nodes); // these come from WorldCup2014.js
        edgesDataset = new vis.DataSet(edges); // these come from WorldCup2014.js
        console.log(edges);
        console.log(nodesDataset);
        function redrawAll() {
            var container = document.getElementById('mynetwork');
            var options = {
                nodes: {
                    shape: 'circle',
                    scaling: {
                        min: 10,
                        max: 150,
                        label: {
                            min: 8,
                            max: 30,
                            drawThreshold: 12,
                            maxVisible: 20
                        }
                    },
                    font: {
                        size: 12,
                        face: 'Tahoma'
                    }
                },
                edges: {
                    width: 0.15,
                    color: { inherit: 'from' },
                    smooth: {
                        type: 'continuous',
                        forceDirection: "none"
                    }
                },
                physics: {
                    "barnesHut": {
                        "gravitationalConstant": -8600
                    },
                    "minVelocity": 0.75
                },
                interaction: {
                    tooltipDelay: 200,
                    hideEdgesOnDrag: true,
                    hideEdgesOnZoom: true,
                    navigationButtons: true,
                    keyboard: true
                }
            };
            var data = { nodes: nodesDataset, edges: edgesDataset } // Note: data is coming from ./datasources/WorldCup2014.js
            network = new vis.Network(container, data, options);
            // get a JSON object
            allNodes = nodesDataset.get({ returnType: "Object" });
            network.on("click", neighbourhoodHighlight);
            //var url1 = "https://localhost:44360/api/AgEdges";
            //var ajax1 = new XMLHttpRequest();
            //ajax1.onload = getEdges;
            //ajax1.onerror = errorEdges;
            //ajax1.open("GET", url1, true);
            //ajax1.send();
        }
        redrawAll();
    }
    else {
        // handle more HTTP response codes here;
    }
}
function updateThis() {
    //ajax.open("GET", url, true);
    // ajax.send();
}
function updateDisplay() {
    console.log(this); // log the response
    if (this.status == 200) { // request succeeded
        alldata = JSON.parse(this.response);
        console.log(alldata);
        eval(alldata);
        var highlightActive = false;
        nodesDataset = new vis.DataSet(nodes); // these come from WorldCup2014.js
        edgesDataset = new vis.DataSet(edges); // these come from WorldCup2014.js
        console.log(edges);
        console.log(nodesDataset);
        function redrawAll() {
            var container = document.getElementById('mynetwork');
            var options = {
                nodes: {
                    shape: 'circle',
                    scaling: {
                        min: 10,
                        max: 150,
                        label: {
                            min: 8,
                            max: 30,
                            drawThreshold: 12,
                            maxVisible: 20
                        }
                    },
                    font: {
                        size: 12,
                        face: 'Tahoma'
                    }
                },
                edges: {
                    width: 0.15,
                    color: { inherit: 'from' },
                    smooth: {
                        type: 'continuous'
                    }
                },
                physics: {
                    "barnesHut": {
                        "gravitationalConstant": -8600
                    },
                    "minVelocity": 0.75
                },
                interaction: {
                    tooltipDelay: 200,
                    hideEdgesOnDrag: true,
                    hideEdgesOnZoom: true,
                    navigationButtons: true,
                    keyboard: true
                }
            };
            var data = { nodes: nodesDataset, edges: edgesDataset } // Note: data is coming from ./datasources/WorldCup2014.js
            network = new vis.Network(container, data, options);
            // get a JSON object
            allNodes = nodesDataset.get({ returnType: "Object" });
            network.on("click", neighbourhoodHighlight);
            //var url1 = "https://localhost:44360/api/AgEdges";
            //var ajax1 = new XMLHttpRequest();
            //ajax1.onload = getEdges;
            //ajax1.onerror = errorEdges;
            //ajax1.open("GET", url1, true);
            //ajax1.send();
        }
        redrawAll();
    }
    else {
        // handle more HTTP response codes here;
    }
}
function neighbourhoodHighlight(params) {
    // if something is selected:
    if (params.nodes.length > 0) {
        highlightActive = true;
        var i, j;
        selectedNode = params.nodes[0];
        var degrees = 2;
        var t = new Date();
        var user = "browser";
        var message = String(allNodes[selectedNode].uri) + "----" + String(allNodes[selectedNode].label);

        // mark all nodes as hard to read.
        for (var nodeId in allNodes) {
            allNodes[nodeId].color = 'rgba(200,200,200,0.5)';
            if (allNodes[nodeId].hiddenLabel === undefined) {
                allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;
                ////allNodes[nodeId].label = undefined;
            }
        }
        var connectedNodes = network.getConnectedNodes(selectedNode);
        var allConnectedNodes = [];
        // get the second degree nodes
        for (i = 1; i < degrees; i++) {
            for (j = 0; j < connectedNodes.length; j++) {
                allConnectedNodes = allConnectedNodes.concat(network.getConnectedNodes(connectedNodes[j]));
            }
        }
        // all second degree nodes get a different color and their label back
        for (i = 0; i < allConnectedNodes.length; i++) {
            allNodes[allConnectedNodes[i]].color = 'rgba(150,150,150,0.75)';
            if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
                allNodes[allConnectedNodes[i]].label = allNodes[allConnectedNodes[i]].hiddenLabel;
                allNodes[allConnectedNodes[i]].hiddenLabel = undefined;

            }
        }
        // all first degree nodes get their own color and their label back
        for (i = 0; i < connectedNodes.length; i++) {
            allNodes[connectedNodes[i]].color = undefined;
            if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
                allNodes[connectedNodes[i]].label = allNodes[connectedNodes[i]].hiddenLabel;
                // allNodes[connectedNodes[i]].hiddenLabel = undefined;
            }
        }

        // the main node gets its own color and its label back.
        allNodes[selectedNode].color = undefined;
        if (allNodes[selectedNode].hiddenLabel !== undefined) {
            allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;

            // allNodes[selectedNode].hiddenLabel = undefined;
        }
        var options = {
            // position: {x:positionx,y:positiony}, // this is not relevant when focusing on nodes
            scale: 1.0,
            offset: { x: 0, y: 0 },
            duration: 1000,
            easingFunction: 'easeInOutQuad'
        };

        network.focus(allNodes[selectedNode], options);

    }
    else if (highlightActive === true) {
        // reset all nodes
        for (var nodeId in allNodes) {
            allNodes[nodeId].color = undefined;
            if (allNodes[nodeId].hiddenLabel !== undefined) {
                allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
                allNodes[nodeId].hiddenLabel = undefined;
            }
        }
        highlightActive = false;
    }
    // transform the object into an array
    var updateArray = [];
    for (nodeId in allNodes) {
        if (allNodes.hasOwnProperty(nodeId)) {
            updateArray.push(allNodes[nodeId]);
        }
    }
    nodesDataset.update(updateArray);
}
function errorFunctionName(e) {
    console.log(this);
    console.error(e);
    // do something with this.status, this.statusText
}
function getEdges() {
    console.log(this); // log the response
    if (this.status == 200) { // request succeeded
        edges = JSON.parse(this.response);
        console.log(nodes);
        console.log("part 2");
        console.log(edges);
        var nodes = new vis.DataSet(nodes);
        // create an array with edges
        var edges = new vis.DataSet(edges);
        var container = document.getElementById('mynetwork');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {};
        var network = new vis.Network(container, data, options);
    } else {
        // handle more HTTP response codes here;
    }
}
function errorEdges(e) {
    console.log(this);
    console.error(e);
    // do something with this.status, this.statusText
}