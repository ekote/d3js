// 4_graph JavaScript file

var width = 500;
var height = 300;

// categorical scale of colors
var color = d3.scale.category10();

// loading file
d3.json("lotr1.json", function(error, graph) {
  if (error) throw error;
  
  // lookup this
  console.log("graph", graph);

  var svg = d3.select("#chart").append("svg")
      .attr("width", width)
      .attr("height", height);


  // creating force object
  var force = d3.layout.force()
      .charge(-300)             // repulsion between nodes
      .linkDistance(30)         // link distance when relaxed
      .size([width, height])    // size
      .nodes(graph.nodes)       // nodes
      .links(graph.links)       // links
      .start();                 // initialize

  // link (or edges) between nodes
  var link = svg.selectAll(".link")
      .data(graph.links);
      
  link.enter().append("line")
      .attr("class", "link")
      .style("stroke", "black")
      .style("stroke-width", function(d) { return Math.sqrt(d.count) / 2; });

  // nodes
  var node = svg.selectAll(".node")
      .data(graph.nodes);
      
  node.enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(0); })
      .call(force.drag)
      .append("title")
        .text(function (d) { return d.name; });  // mouseover text

  // what to do each iteration
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });
});

// Exercises
// - Use "race" for fill.
// - Change node size depending on "talking_count" (use d3.scale.sqrt).
// - (advanced) use text fields in addition to nodes.
