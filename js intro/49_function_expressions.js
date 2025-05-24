/* 49. Function expressions */
// Function expressions assign a function to a variable.
const sayHi = function(name) {
    console.log("Hi,", name);
};
sayHi("Dana");

// You can use arrow functions as expressions too:
const sayBye = (name) => console.log("Bye,", name);
sayBye("Alex");
