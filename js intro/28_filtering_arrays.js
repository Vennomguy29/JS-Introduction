/* 28. Filtering arrays */
// The filter() method creates a new array with elements that pass a test.
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(n => n % 2 === 0); // Only even numbers
console.log("Even numbers:", evenNumbers); // [2,4,6]

// Filtering objects:
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];
let adults = people.filter(p => p.age >= 18);
console.log("Adults:", adults);
