// 13. Boolean logic
// Boolean values are true or false.
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more
console.log("Is adult?", isAdult);

// Logical operators: && (and), || (or), ! (not)
let hasID = true;
if (isAdult && hasID) {
    console.log("You can enter.");
} else {
    console.log("Access denied.");
}

let isTeen = age >= 13 && age < 18;
console.log("Is teen?", isTeen);
