/* 45. Sorting arrays */
// sort() arranges array elements. By default, it sorts as strings.
let unsorted = [3, 1, 4, 2];
unsorted.sort(); // [1,2,3,4] as strings, but works for numbers < 10
console.log("Default sort:", unsorted);

// For numbers, use a compare function:
let nums = [10, 2, 30, 1];
nums.sort((a, b) => a - b); // Ascending
console.log("Sorted numbers:", nums);
