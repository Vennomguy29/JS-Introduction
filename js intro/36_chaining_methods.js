/* 36. Chaining methods */
// You can chain array methods for powerful data transformations.
let chainResult = [1, 2, 3, 4]
    .filter(n => n > 2) // [3,4]
    .map(n => n * 10)   // [30,40]
    .reduce((a, b) => a + b, 0); // 70
console.log("Chained result:", chainResult);
