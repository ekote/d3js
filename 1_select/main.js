// 1_select JavaScript file

// create variable svg
// selecting <svg> within the document by "svg" tag
var svg = d3.select("svg");


// setting width and height attributes to svg variable
svg.attr("width", 400);
svg.attr("height", 600);


// select <circle> within selected <svg>
//var circle = svg.select("circle");


// setting parameters
//circle.attr("cx", 200);           // circle center - x
//circle.attr("cy", 100);           // circle center - y
//circle.attr("r", 50);             // circle radius
//circle.style("fill", "#d62728");  // circle fill color (style, not attr)


// // but we can make is shorter:
// (uncomment below to run)
svg.select("circle")
   .attr("cx", 200)
   .attr("cy", 100)
   .attr("r", 50)
   .style("fill", "#d62728")
   .style("opacity", 0.5);


// // also, usually we want to create elements with d3.js:
// // (uncomment below to run)
var rect = svg.append("rect")
   .attr("x", 50)       // upper left corner - x
   .attr("y", 100)      // upper left corner - y
   .attr("width", 250)
   .attr("height", 20)
   .style("fill", "none")
   .style("stroke", "#1f77b4")
   .style("stroke-width", "4px");

// "rect" -

// NOTE: the last object is being drawn on the top

// Exercises:
// 1. Make rect semitransparent (style "opacity" with value 0.5).
// 2. Draw a new green circle with r=25, cx=50, cy=100.

svg.select("circle")
    .attr("cx", 50)
    .attr("cy", 100)
    .attr("r", 25)
    .style("fill", "green")
    .style("opacity", 0.5);