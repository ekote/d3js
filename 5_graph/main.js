// 4_graph JavaScript file

var width = 800;
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

    console.log(" AREA w:" + width + "h" + height);


  // creating force object
  var force = d3.layout.force()
      .charge(-300)             // repulsion between nodes
      .linkDistance(50)         // link distance when relaxed
      .size([width, height])    // size
      .nodes(graph.nodes)       // nodes
      .links(graph.links)       // links
      .start();                 // initialize

  // link (or edges) between nodes
  var link = svg.selectAll(".link")
      .data(graph.links);

      /* APPEND -  */
  link.enter().append("line")
      .attr("class", "link") //dodajemy classe link do kazdej linii
      .style("stroke", "black")
      .style("stroke-width", function(d) { return Math.sqrt(d.count) / 2; });

  // nodes
  var node = svg.selectAll(".node")
      .data(graph.nodes);


  node.enter().append("circle")
      .attr("class", "node")
      .attr("r", function (d) { return d.talking_count / 3 ; })
      .style("fill", function(d) { return color(d.race); })// d.race koloruje w rózny sposob! extra
      .call(force.drag)
      .append("title")
        .text(function (d) { return d.name + d.talking_count; });  // mouseover text

    var label = svg.selectAll(".label")
        .data(graph.nodes);

    label.enter()
        .append("text")
        .attr("class" , "label")
        .style("font-size" , "10px");



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
