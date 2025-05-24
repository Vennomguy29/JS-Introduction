/* 26. Default parameters */
// You can set default values for function parameters.
function multiply(a, b = 2) {
    return a * b;
}
console.log("Multiply with default param:", multiply(5)); // 10
console.log("Multiply with both params:", multiply(5, 3)); // 15
