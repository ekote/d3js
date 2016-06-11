// 3_enter_update_exit JavaScript file
// see also: http://bl.ocks.org/stared/12bf2a87d194d5bf9bbe49a9601104e3

// usually we create as much as possible in D3.js
var svg = d3.select("#chart").append("svg")
  .attr("width", 600)
  .attr("height", 400);


// text button for drawing
svg.append("text")
  .attr("x", 25)
  .attr("y", 40)
  .attr("font-size", "30px")
  .text("click me!")
  .on("click", function () {
    var newData = generateData();
    console.log("newData", newData);
    draw1(newData);   // you will be changing this line
    // draw2(newData);
    // draw3(newData);
  });


// just enter
function draw1 (ourData) {

  var boxes = svg.selectAll(".box").data(ourData);

  boxes.enter()
    .append("rect")
      .attr("class", "box")
      .attr("x", function (d, i) { return 50 + 100 * i; })
      .attr("y", function (d) { return 50 + d.shift; })
      .attr("width", 50)
      .attr("height", function (d) { return d.height; })
      .style("fill", "#1f77b4");

}


// simple enter-update-exit pattern
function draw2 (ourData) {

  var boxes = svg.selectAll(".box").data(ourData);

  boxes.enter()
    .append("rect")
      .attr("class", "box");

  boxes
    .attr("x", function (d, i) { return 50 + 100 * i; })
    .attr("y", function (d) { return 50 + d.shift; })
    .attr("width", 50)
    .attr("height", function (d) { return d.height; })
    .style("fill", "#1f77b4");

  boxes.exit()
    .remove();

}


// Exercise (tricky!):
// - make new points red.


// enter-update-exit pattern with transitions
function draw3 (ourData) {

  var boxes = svg.selectAll(".box").data(ourData);

  boxes.enter()
    .append("rect")
      .attr("class", "box")
      .attr("x", function (d, i) { return 50 + 100 * i; })
      .attr("width", 50)
      .style("fill", "#1f77b4")
      .style("opacity", 0);

  boxes
    .transition().duration(2000)
      .style("opacity", 1)
      .attr("y", function (d) { return 50 + d.shift; })
      .attr("height", function (d) { return d.height; });

  boxes.exit()
    .transition().duration(2000)
      .style("fill", "gray")
      .remove();

}


// technical part - a function to generate data
function generateData () {
  var n = 2 + Math.floor(5 * Math.random());
  return d3.range(n).map(function (i) {
    return {
      shift: 50 * Math.random(),
      height: 300 * Math.random()
    };
  });
}


// Exercise:
// - make "enter" as falling from above,
// and "exit" as falling down.
