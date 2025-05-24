// 24. JSON
// JSON (JavaScript Object Notation) is a format for storing and exchanging data.
let jsonString = '{"fruit":"apple","count":5}';
// Parse JSON string to object:
let jsonObj = JSON.parse(jsonString);
console.log("Parsed JSON object:", jsonObj);
// Convert object to JSON string:
console.log("Stringified JSON:", JSON.stringify(jsonObj));

// JSON is commonly used for data exchange with web servers.
let person = { name: "Alice", age: 25 };
let personJSON = JSON.stringify(person);
console.log("Person as JSON:", personJSON);
