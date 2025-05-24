// 18. Try-catch error handling
// Use try-catch to handle errors and prevent your program from crashing.
try {
    throw new Error("Something went wrong!"); // Create a new error
} catch (error) {
    // This block runs if an error is thrown above
    console.log("Caught an error:", error.message);
}

// You can use try-catch with any code that might fail:
let jsonString = '{"fruit":"apple"}';
try {
    let obj = JSON.parse(jsonString);
    console.log("Parsed JSON:", obj);
} catch (e) {
    console.log("Invalid JSON:", e.message);
}
