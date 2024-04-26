var reviews = [5, 5, 4, 3, 1.2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var averageString = (total / reviews.length).toFixed(2); // Round to two decimal points
var averageNumber = parseFloat((total / reviews.length).toFixed(2)); // Round to two decimal points and convert back to number
console.log("Review AverageString  is " + averageString);
console.log("Review AverageNumber  is " + averageNumber);
