// 15. Arrow functions
// Arrow functions are a shorter way to write functions.
const add = (a, b) => a + b;
console.log("Arrow function add(2, 3):", add(2, 3)); // 5

// If only one parameter, you can omit parentheses:
const square = x => x * 2;
console.log("Arrow function square(4):", square(4));

// Arrow functions are often used with array methods:
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);
