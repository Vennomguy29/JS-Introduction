// 22. Classes
// Classes are blueprints for creating objects with shared properties and methods.
class Animal {
    constructor(type) {
        this.type = type; // property
    }
    speak() {
        console.log(`The ${this.type} makes a sound.`);
    }
}

let dog = new Animal("dog");
dog.speak(); // Output: The dog makes a sound.

// You can add more methods or properties:
class Cat extends Animal {
    speak() {
        console.log(`The ${this.type} meows.`);
    }
}
let cat = new Cat("cat");
cat.speak(); // Output: The cat meows.
