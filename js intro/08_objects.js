// 8. Objects: group related data
// Objects let you group related data and functions (methods).
let person = {
    name: "Charlie", // property
    age: 30,
    isStudent: false,
    greet: function() { // method
        console.log("Hello, my name is " + this.name);
    }
};
console.log("Person's name:", person.name); // Access property
console.log("Is student?", person.isStudent);
person.greet(); // Call method

// You can add or change properties:
person.age = 31;
person.city = "London";
console.log("Updated person:", person);
