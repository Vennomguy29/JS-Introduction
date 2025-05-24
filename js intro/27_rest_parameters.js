/* 27. Rest parameters */
// Rest parameters let you accept any number of arguments as an array.
function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Sum with rest params:", sumAll(1, 2, 3, 4)); // 10
console.log("Sum with two params:", sumAll(5, 10)); // 15
