// 2_selectAll JavaScript file


// selecting <svg> just below id="chart"
var svg = d3.select("#chart svg")
	.attr("width", 600)
	.attr("height", 400);


// select only  a single element 
svg.select("circle").attr("fill", "#d62728");


// // selectAll selects all elements
// svg.selectAll("circle").attr("fill", "#d62728");


// // but usually we want to select according to class
// svg.selectAll(".dot").attr("fill", "black");
// svg.selectAll(".node").attr("fill", "#e377c2");


// // usually we want to modify elements according to data
// // we need to pass an array
// var dataForDots = [5, 10, 20];

// svg.selectAll(".dot")
//   .data(dataForDots)                                        // here we bind data
//     .attr("r", function (d) { return d; })                  // d goes: 5, 10, 20 
//     .attr("cy", function (d, i) { return 200 + 25 * i; });  // i goes: 0, 1, 2


// NOTE: if you use the most recent Firefox of Chrome
// there is a shorter notation with so-called arrow function
// (a feature of ES2016, a new JavaScript standard)
// svg.selectAll(".dot")
//   .data(dataForDots)
//     .attr("r", (d) => d)
//     .attr("cy", (d, i) => 200 + 25 * i);
// if you have one of these browsers, feel free to use it during this workshop
// beware, that for production code you need to use 'old' function syntax 


// typical data is an array of JS objects (~dictionaries)
var dataForNodes = [
	{"size": 6.5, "opacity": 0.6, "kind": 0},
	{"size": 5.0, "opacity": 0.8, "kind": 1},
	{"size": 8.0, "opacity": 0.5, "kind": 0},
	{"size": 3.0, "opacity": 0.3, "kind": 1}   // this extra one is on purpose!
];

// try console.log(dataForNodes[0])
// try console.log(dataForNodes[0].opacity)

// // (uncomment below to run)
// svg.selectAll(".node")
//   .data(dataForNodes)
// 	  .attr("r", function (d) { return 10 * d.size; })
// 	  .style("opacity", function (d) { return d.opacity; })
// 	  .style("fill", function (d) {
// 	  	if (d.kind == 0) {
// 	  		return "#9467bd";
// 	  	} else {
// 	  		return "#bcbd22";
// 	  	}
// 	  });


// Exercises
// 1. For circles with class "node", add stroke "black" with stroke width being same as "size".
// 2. Select all circles and make their cy evenly spaced (e.g. by 50).