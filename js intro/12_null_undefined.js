// 12. Null and undefined
// 'null' is an intentional absence of any value.
let emptyValue = null;
// 'undefined' means a variable has been declared but not assigned a value.
let notAssigned;
console.log("Null value:", emptyValue); // Output: Null value: null
console.log("Undefined value:", notAssigned); // Output: Undefined value: undefined

// Checking for null or undefined:
if (emptyValue === null) {
    console.log("emptyValue is null");
}
if (typeof notAssigned === "undefined") {
    console.log("notAssigned is undefined");
}
