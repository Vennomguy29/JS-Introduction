/* 40. Getters and setters */
// Getters and setters let you control access to object properties.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set area(value) {
        // Set width and height to make area = value (as a square)
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}
let rect = new Rectangle(4, 5);
console.log("Rectangle area:", rect.area); // 20
rect.area = 36;
console.log("Rectangle new width:", rect.width); // 6
