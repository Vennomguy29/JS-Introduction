/* 44. Object.keys, values, entries */
// These methods let you work with object properties as arrays.
let person = { name: "Charlie", age: 30, isStudent: false };
console.log("Object keys:", Object.keys(person)); // ["name", "age", "isStudent"]
console.log("Object values:", Object.values(person)); // ["Charlie", 30, false]
console.log("Object entries:", Object.entries(person)); // [["name","Charlie"],["age",30],["isStudent",false]]
