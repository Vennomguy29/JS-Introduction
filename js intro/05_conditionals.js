// 5. Conditionals: make decisions
// Conditionals let you run code only if certain conditions are true.
// The most common is the if-else statement:
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// You can use 'else if' for multiple conditions:
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}

// You can also use the ternary operator for simple conditions:
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote?", canVote);
