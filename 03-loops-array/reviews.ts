let reviews: number[] = [5, 5, 4, 3, 1.2];
let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];

}
let averageString: string = (total / reviews.length).toFixed(2); // Round to two decimal points
let averageNumber: number = parseFloat((total / reviews.length).toFixed(2)); // Round to two decimal points and convert back to number
console.log("Review AverageString  is " + averageString);
console.log("Review AverageNumber  is " + averageNumber);

