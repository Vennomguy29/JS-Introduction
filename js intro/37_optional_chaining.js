/* 37. Optional chaining and nullish coalescing */
// Optional chaining (?.) lets you safely access nested properties.
let user = { profile: { email: "test@example.com" } };
console.log("User email:", user.profile?.email ?? "No email"); // "test@example.com"

// Nullish coalescing (??) provides a default if the value is null or undefined.
let value = null;
console.log(value ?? "Default value"); // "Default value"
