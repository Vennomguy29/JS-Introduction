/* 34. SetTimeout and SetInterval */
// setTimeout runs code once after a delay (in milliseconds):
setTimeout(() => console.log("This runs after 1 second"), 1000);

// setInterval runs code repeatedly at intervals:
let intervalId = setInterval(() => console.log("Interval running..."), 2000);

// clearInterval stops the interval:
setTimeout(() => clearInterval(intervalId), 5000); // Stops after 5 seconds
