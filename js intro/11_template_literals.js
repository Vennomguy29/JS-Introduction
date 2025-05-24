// 11. Template literals
// Template literals let you embed variables and expressions inside strings using backticks (`) and ${}.
let name = "Alice";
let age = 25;
console.log(`Hello, ${name}. You are ${age} years old.`); // Output: Hello, Alice. You are 25 years old.

// You can use expressions inside ${}:
console.log(`Next year, you will be ${age + 1}.`);

// Multiline strings are easy with template literals:
let message = `This is line 1
This is line 2`;
console.log(message);
