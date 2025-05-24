/* 31. Find and findIndex */
// find() returns the first element that matches a condition.
let colors = ["red", "green", "blue"];
let found = colors.find(color => color === "green"); // "green"
console.log("Found color:", found);

// findIndex() returns the index of the first match, or -1 if not found.
let foundIndex = colors.findIndex(color => color === "green"); // 1
console.log("Found color at index:", foundIndex);
