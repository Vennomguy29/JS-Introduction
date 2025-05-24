// 7. Arrays: store multiple values
// Arrays are lists that can hold multiple values.
let colors = ["red", "green", "blue"];
console.log("First color:", colors[0]); // Access by index (starts at 0)
colors.push("yellow"); // Add to the end
console.log("All colors:", colors);
// You can loop through arrays:
for (let i = 0; i < colors.length; i++) {
    console.log("Color at index", i, ":", colors[i]);
}
// Array methods:
console.log("Array length:", colors.length);
console.log("Last color:", colors[colors.length - 1]);
colors.pop(); // Remove last
console.log("After pop:", colors);
