// 7_hierarchy JavaScript file
// see also: https://bl.ocks.org/mbostock/4339607

var width = 600;
var height = 400;

var cluster = d3.layout.cluster()
    .size([height, width - 150]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(60,0)");

d3.json("life.json", function(error, root) {
  if (error) throw error;

  var nodes = cluster.nodes(root);
  var links = cluster.links(nodes);

  // try console.log nodes and links

  var link = svg.selectAll(".link")
      .data(links)
    .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", diagonal)

  var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  node.append("circle")
      .attr("r", function(d) { return d.size * 4; });

  node.append("text")
      .attr("dx", function(d) { return d.children ? -8 : 8; })
      .attr("dy", 3)
      .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
      .text(function(d) { return d.name; });
});

d3.select(self.frameElement).style("height", height + "px");


// Exercises:
// - make final nodes of different color
// - 