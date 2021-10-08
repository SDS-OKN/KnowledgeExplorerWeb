var selectedNode;
var nodes;
var edges;
var alldata;
var network;
var nodesDataset;
var allNodes;
var edgesDataset;
var url = "https://sdsoknservices.mvbg.org/api/Class/retrieveTopNodes/1000";"//agCaller/api/KGNode/retrieveTopNodes/1000";//"https://localhost:32770/api/Class/retrieveTopNodes/1000";  
// var url = "http://localhost:59034/api/KGNode/retrieveTopNodes/1000";
var ajax = new XMLHttpRequest();
ajax.onload = functionName;
ajax.onerror = errorFunctionName;


function startMe() {
    RenderMaps();
    ajax.open("GET", url, true);
    ajax.send();
}


function RenderMaps() {
    require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (Map, MapView, FeatureLayer) {
        var map = new Map({
            basemap: "topo-vector"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-118.805, 34.027], // longitude, latitude
            zoom: 13
        });
        var popupTrailheads = {
            title: "{TRL_NAME}",
            content:
                "<b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft"
        };

        var trailheads = new FeatureLayer({
            url:
                "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
            outFields: ["TRL_NAME", "CITY_JUR", "X_STREET", "PARKING", "ELEV_FT"],
            popupTemplate: popupTrailheads
        });
        var popupTrails = {
            title: "Trail Information",
            content: function () {
                return "This is {TRL_NAME} with {ELEV_GAIN} ft of climbing.";
            }
        };

        var trails = new FeatureLayer({
            url:
                "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",
            outFields: ["TRL_NAME", "ELEV_GAIN"],
            popupTemplate: popupTrails
        });

        map.add(trails, 0);


        map.add(trailheads);
        var popupOpenspaces = {
            title: "{PARK_NAME}",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "AGNCY_NAME",
                            label: "Agency",
                            isEditable: true,
                            tooltip: "",
                            visible: true,
                            format: null,
                            stringFieldOption: "text-box"
                        },
                        {
                            fieldName: "TYPE",
                            label: "Type",
                            isEditable: true,
                            tooltip: "",
                            visible: true,
                            format: null,
                            stringFieldOption: "text-box"
                        },
                        {
                            fieldName: "ACCESS_TYP",
                            label: "Access",
                            isEditable: true,
                            tooltip: "",
                            visible: true,
                            format: null,
                            stringFieldOption: "text-box"
                        },
                        {
                            fieldName: "GIS_ACRES",
                            label: "Acres",
                            isEditable: true,
                            tooltip: "",
                            visible: true,
                            format: {
                                places: 2,
                                digitSeparator: true
                            },
                            stringFieldOption: "text-box"
                        }
                    ]
                }
            ]
        };

        var openspaces = new FeatureLayer({
            url:
                "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0",
            outFields: ["TYPE", "PARK_NAME", "AGNCY_NAME", "ACCESS_TYP", "GIS_ACRES"],
            popupTemplate: popupOpenspaces
        });

        map.add(openspaces, 0);
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