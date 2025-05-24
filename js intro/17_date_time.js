// 17. Date and time
// JavaScript has a built-in Date object for working with dates and times.
let now = new Date();
console.log("Current date and time:", now);
console.log("Current year:", now.getFullYear());
console.log("Current month (0-11):", now.getMonth());
console.log("Current day of month:", now.getDate());
console.log("Current hour:", now.getHours());

// Formatting dates:
let dateString = now.toLocaleDateString();
let timeString = now.toLocaleTimeString();
console.log("Formatted date:", dateString);
console.log("Formatted time:", timeString);
