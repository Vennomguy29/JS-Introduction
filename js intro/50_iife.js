/* 50. Immediately Invoked Function Expression (IIFE) */
// An IIFE runs as soon as it is defined.
(function() {
    console.log("IIFE ran!");
})();

// Useful for creating a private scope:
let result = (function(a, b) {
    return a + b;
})(2, 3);
console.log("IIFE result:", result);
