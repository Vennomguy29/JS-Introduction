// 23. Callback functions
// A callback is a function passed as an argument to another function.
function doSomething(callback) {
    console.log("Doing something...");
    callback(); // Call the callback function
}

// Pass an anonymous function as a callback:
doSomething(function() {
    console.log("Callback called!");
});

// Callbacks are used in array methods:
let numbers = [1, 2, 3];
numbers.forEach(function(n) {
    console.log("Number:", n);
});
