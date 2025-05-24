/* 38. Symbol type */
// Symbol is a unique and immutable primitive value.
let sym = Symbol("unique");
console.log("Symbol value:", sym.toString());

// Symbols are often used as unique object keys:
let obj = {};
obj[sym] = "secret";
console.log("Value at symbol key:", obj[sym]);
