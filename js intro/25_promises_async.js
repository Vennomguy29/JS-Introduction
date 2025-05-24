/* 25. Promises and async/await */
// Promises represent the result of an asynchronous operation.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded!"), 1000); // Simulate async work
    });
}

// Using .then() to handle the result:
fetchData().then(data => console.log("Promise result:", data));

// Using async/await for cleaner syntax:
async function asyncExample() {
    let result = await fetchData();
    console.log("Async/await result:", result);
}
asyncExample();

// Promises can be rejected:
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Error!"), 500);
    });
}
fetchWithError().catch(error => console.log("Promise error:", error));
