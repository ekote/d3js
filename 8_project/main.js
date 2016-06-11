// 8_project JavaScript file
// data adapted from:
// http://www.fda.gov/Food/IngredientsPackagingLabeling/LabelingNutrition/ucm063482.htm

// from scratch!
// hint - first you need to create <svg> element

// note that when we read from CSV, ale values are considered strings
// to convert them to numbers use parseFloat (or +value)
d3.csv("fruits.csv", function (error, data) {
  console.log(data);
  // ...
})