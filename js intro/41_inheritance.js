/* 41. Inheritance */
// Inheritance lets you create a class based on another class.
class Animal {
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log(`The ${this.type} makes a sound.`);
    }
}
class Bird extends Animal {
    speak() {
        console.log(`The ${this.type} chirps.`);
    }
}
let parrot = new Bird("parrot");
parrot.speak(); // Output: The parrot chirps.
