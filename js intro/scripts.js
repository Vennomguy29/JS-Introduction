// Welcome to JavaScript!

// 1. Variables: store data
let name = "Alice";
let age = 25;
const country = "USA"; // constant variable

// 2. Output: show messages
console.log("Hello, " + name + "!");
console.log("You are " + age + " years old.");
console.log("You live in " + country + ".");

// 3. Simple math
let sum = 5 + 3;
let product = 4 * 2;
let difference = 10 - 7;
let quotient = 20 / 4;
console.log("5 + 3 =", sum);
console.log("4 * 2 =", product);
console.log("10 - 7 =", difference);
console.log("20 / 4 =", quotient);

// 4. Functions: reusable code blocks
function greet(person) {
    console.log("Hi, " + person + "!");
}

greet("Bob");

// 5. Conditionals: make decisions
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 6. Loops: repeat actions
for (let i = 1; i <= 3; i++) {
    console.log("Count: " + i);
}

// 7. Arrays: store multiple values
let colors = ["red", "green", "blue"];
console.log("First color:", colors[0]);
colors.push("yellow");
console.log("All colors:", colors);

// 8. Objects: group related data
let person = {
    name: "Charlie",
    age: 30,
    isStudent: false
};
console.log("Person's name:", person.name);
console.log("Is student?", person.isStudent);

// 9. While loop
let n = 1;
while (n <= 3) {
    console.log("While loop count:", n);
    n++;
}

// 10. Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// 11. Template literals
console.log(`Hello, ${name}. You are ${age} years old.`);

// 12. Null and undefined
let emptyValue = null;
let notAssigned;
console.log("Null value:", emptyValue);
console.log("Undefined value:", notAssigned);

// 13. Boolean logic
let isAdult = age >= 18;
console.log("Is adult?", isAdult);

// 14. Array iteration
colors.forEach(function(color) {
    console.log("Color from forEach:", color);
});

// 15. Arrow functions
const add = (a, b) => a + b;
console.log("Arrow function add(2, 3):", add(2, 3));

// 16. String methods
let greeting = "Hello, World!";
console.log("Length of greeting:", greeting.length);
console.log("Uppercase:", greeting.toUpperCase());
console.log("Does it include 'World'? ", greeting.includes("World"));

// 17. Date and time
let now = new Date();
console.log("Current date and time:", now);
console.log("Current year:", now.getFullYear());

// 18. Try-catch error handling
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Caught an error:", error.message);
}

// 19. Spread operator
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
console.log("Spread operator result:", moreNumbers);

// 20. Destructuring assignment
let [firstColor, secondColor] = colors;
console.log("First color (destructured):", firstColor);
console.log("Second color (destructured):", secondColor);

let { name: personName, age: personAge } = person;
console.log("Destructured name:", personName);
console.log("Destructured age:", personAge);

// 21. Map and Set
let myMap = new Map();
myMap.set("key1", "value1");
console.log("Map value for 'key1':", myMap.get("key1"));

let mySet = new Set([1, 2, 2, 3]);
console.log("Set contents:", mySet);

// 22. Classes
class Animal {
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log(`The ${this.type} makes a sound.`);
    }
}
let dog = new Animal("dog");
dog.speak();

// 23. Callback functions
function doSomething(callback) {
    console.log("Doing something...");
    callback();
}
doSomething(function() {
    console.log("Callback called!");
});

// 24. JSON
let jsonString = '{"fruit":"apple","count":5}';
let jsonObj = JSON.parse(jsonString);
console.log("Parsed JSON object:", jsonObj);
console.log("Stringified JSON:", JSON.stringify(jsonObj));

/* 25. Promises and async/await */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded!"), 1000);
    });
}
fetchData().then(data => console.log("Promise result:", data));

async function asyncExample() {
    let result = await fetchData();
    console.log("Async/await result:", result);
}
asyncExample();

/* 26. Default parameters */
function multiply(a, b = 2) {
    return a * b;
}
console.log("Multiply with default param:", multiply(5));

/* 27. Rest parameters */
function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Sum with rest params:", sumAll(1, 2, 3, 4));

/* 28. Filtering arrays */
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNumbers);

/* 29. Mapping arrays */
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);

/* 30. Reducing arrays */
let total = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum using reduce:", total);

/* 31. Find and findIndex */
let found = colors.find(color => color === "green");
let foundIndex = colors.findIndex(color => color === "green");
console.log("Found color:", found, "at index:", foundIndex);

/* 32. Local Storage (browser only) */
// localStorage.setItem("username", name);
// console.log("Username from localStorage:", localStorage.getItem("username"));

/* 33. DOM Manipulation (browser only) */
// document.body.style.backgroundColor = "lightblue";

/* 34. SetTimeout and SetInterval */
setTimeout(() => console.log("This runs after 1 second"), 1000);
let intervalId = setInterval(() => console.log("Interval running..."), 2000);
setTimeout(() => clearInterval(intervalId), 5000);

/* 35. Import/Export (modules, not runnable in this file) */
// export function sayHello() { console.log("Hello!"); }
// import { sayHello } from './module.js';

/* 36. Chaining methods */
let chainResult = [1, 2, 3, 4]
    .filter(n => n > 2)
    .map(n => n * 10)
    .reduce((a, b) => a + b, 0);
console.log("Chained result:", chainResult);

/* 37. Optional chaining and nullish coalescing */
let user = { profile: { email: "test@example.com" } };
console.log("User email:", user.profile?.email ?? "No email");

/* 38. Symbol type */
let sym = Symbol("unique");
console.log("Symbol value:", sym.toString());

/* 39. Static class methods */
class MathUtil {
    static square(x) {
        return x * x;
    }
}
console.log("Static method square:", MathUtil.square(5));

/* 40. Getters and setters */
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}
let rect = new Rectangle(4, 5);
console.log("Rectangle area:", rect.area);
rect.area = 36;
console.log("Rectangle new width:", rect.width);

/* 41. Inheritance */
class Bird extends Animal {
    speak() {
        console.log(`The ${this.type} chirps.`);
    }
}
let parrot = new Bird("parrot");
parrot.speak();

/* 42. Error subclasses */
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("Custom error occurred!");
} catch (e) {
    console.log(e.name + ":", e.message);
}

/* 43. Deep cloning objects */
let original = { a: 1, b: { c: 2 } };
let clone = JSON.parse(JSON.stringify(original));
clone.b.c = 99;
console.log("Original object after clone change:", original);

/* 44. Object.keys, values, entries */
console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));

/* 45. Sorting arrays */
let unsorted = [3, 1, 4, 2];
unsorted.sort((a, b) => a - b);
console.log("Sorted array:", unsorted);

/* 46. String interpolation with expressions */
let apples = 5;
console.log(`You have ${apples > 1 ? apples + " apples" : apples + " apple"}.`);

/* 47. Chaining Promises */
fetchData()
    .then(data => data + " Again!")
    .then(data => console.log("Chained promise:", data));

/* 48. WeakMap and WeakSet */
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "some value");
console.log("WeakMap has obj?", weakMap.has(obj));

let weakSet = new WeakSet();
weakSet.add(obj);
console.log("WeakSet has obj?", weakSet.has(obj));

/* 49. Function expressions */
const sayHi = function(name) {
    console.log("Hi,", name);
};
sayHi("Dana");

/* 50. Immediately Invoked Function Expression (IIFE) */
(function() {
    console.log("IIFE ran!");
})();

// Note: Some features like localStorage and DOM manipulation are browser-specific and won't run in a Node.js environment.
// You can run this code in a browser console or a JavaScript environment that supports ES6+ features.

/* Now you have a basic overview of JavaScript features! */
// Happy coding!