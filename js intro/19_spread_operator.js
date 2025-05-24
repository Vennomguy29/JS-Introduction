// 19. Spread operator
// The spread operator (...) expands arrays or objects.
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5]; // [1,2,3,4,5]
console.log("Spread operator result:", moreNumbers);

// Spread can also copy arrays:
let copy = [...numbers];
console.log("Copy of numbers:", copy);

// Spread with objects:
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log("Spread with objects:", obj2);
