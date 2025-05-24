// 16. String methods
// Strings have many useful methods for working with text.
let greeting = "Hello, World!";
console.log("Length of greeting:", greeting.length); // 13
console.log("Uppercase:", greeting.toUpperCase()); // "HELLO, WORLD!"
console.log("Lowercase:", greeting.toLowerCase()); // "hello, world!"
console.log("Does it include 'World'? ", greeting.includes("World")); // true
console.log("Replace 'World' with 'JavaScript':", greeting.replace("World", "JavaScript"));
console.log("Substring (0,5):", greeting.substring(0, 5)); // "Hello"
console.log("Split by comma:", greeting.split(",")); // ["Hello", " World!"]
