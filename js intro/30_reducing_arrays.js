/* 30. Reducing arrays */
// The reduce() method combines all elements into a single value.
let numbers = [1, 2, 3, 4];
let total = numbers.reduce((acc, n) => acc + n, 0); // Sum
console.log("Sum using reduce:", total); // 10

// Reduce to multiply all numbers:
let product = numbers.reduce((acc, n) => acc * n, 1);
console.log("Product using reduce:", product); // 24
