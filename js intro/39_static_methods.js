/* 39. Static class methods */
// Static methods belong to the class, not instances.
class MathUtil {
    static square(x) {
        return x * x;
    }
    static cube(x) {
        return x * x * x;
    }
}
console.log("Static method square:", MathUtil.square(5)); // 25
console.log("Static method cube:", MathUtil.cube(3)); // 27
