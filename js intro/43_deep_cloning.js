/* 43. Deep cloning objects */
// Deep cloning creates a copy of an object and all nested objects.
let original = { a: 1, b: { c: 2 } };
// JSON methods work for simple objects (no functions, undefined, or symbols):
let clone = JSON.parse(JSON.stringify(original));
clone.b.c = 99;
console.log("Original object after clone change:", original); // { a: 1, b: { c: 2 } }
console.log("Cloned object:", clone); // { a: 1, b: { c: 99 } }
