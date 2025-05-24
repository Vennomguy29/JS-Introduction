/* 29. Mapping arrays */
// The map() method creates a new array by transforming each element.
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2); // [2,4,6,8]
console.log("Doubled numbers:", doubled);

// Mapping objects:
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 }
];
let names = people.map(p => p.name);
console.log("Names:", names);
