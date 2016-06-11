// 4_scale JavaScript file

var svg = d3.select("#chart").append("svg")
  .attr("width", 600)
  .attr("height", 400);


// creating scales
var xScale = d3.scale.linear()
  .domain([-3, 3])    // original values from data
  .range([50, 550]);  // values on screen

// important: it is Array, not a sequence of arguments
// domain(0, 1) won't work

var colorScale = d3.scale.linear()
  .domain([0, 100])
  .range(["red", "blue"]);  // it also works for colors!


// some data
var data = [
  {"position": -3, "temp": 5,  "importance": 3},
  {"position": -2, "temp": 35, "importance": 9},
  {"position": -1, "temp": 20, "importance": 4},
  {"position": 0,  "temp": 70, "importance": 1},
  {"position": 1,  "temp": 90, "importance": 3},
  {"position": 2,  "temp": 65, "importance": 5},
  {"position": 3,  "temp": 50, "importance": 8}
];


// addind dots that use scales
svg.selectAll(".dot").data(data)
  .enter()
  .append("circle")
    .attr("class", "dot")
    .attr("r", 25)
    .attr("cx", function (d) { return xScale(d.position); })
    .attr("cy", 100)
    .style("fill", function (d) { return colorScale(d.temp); })

 
 // Exercise
 // - set r according to importace, with values from 10 to 50
