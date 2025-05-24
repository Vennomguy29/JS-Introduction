/* 47. Chaining Promises */
// You can chain .then() calls to process promise results step by step.
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Data loaded!"), 500));
}
fetchData()
    .then(data => data + " Again!")
    .then(data => console.log("Chained promise:", data));
