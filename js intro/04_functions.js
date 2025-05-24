// 4. Functions: reusable code blocks
// Functions let you group code into reusable blocks.
// You can define a function using the 'function' keyword:
function greet(person) {
    // 'person' is a parameter (input to the function)
    console.log("Hi, " + person + "!");
}

// Call (invoke) the function with an argument:
greet("Bob"); // Output: Hi, Bob!
greet("Alice"); // Output: Hi, Alice!

// Functions can return values:
function add(a, b) {
    return a + b;
}
let result = add(2, 3);
console.log("2 + 3 =", result);

// You can also assign functions to variables (see section 49)
