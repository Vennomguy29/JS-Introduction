// 20. Destructuring assignment
// Destructuring lets you unpack values from arrays or properties from objects.
let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors; // Array destructuring
console.log("First color (destructured):", firstColor); // "red"
console.log("Second color (destructured):", secondColor); // "green"

let person = { name: "Charlie", age: 30 };
let { name: personName, age: personAge } = person; // Object destructuring
console.log("Destructured name:", personName); // "Charlie"
console.log("Destructured age:", personAge); // 30

// You can set default values:
let [a = 1, b = 2] = [];
console.log("Defaults:", a, b); // 1 2
