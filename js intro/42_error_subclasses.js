/* 42. Error subclasses */
// You can create your own error types by extending the Error class.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("Custom error occurred!");
} catch (e) {
    console.log(e.name + ":", e.message); // CustomError: Custom error occurred!
}
