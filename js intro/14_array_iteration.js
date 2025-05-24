// 14. Array iteration
// You can loop through arrays in several ways.
let colors = ["red", "green", "blue", "yellow"];

// forEach method:
colors.forEach(function(color, index) {
    console.log(`Color at index ${index}:`, color);
});

// for...of loop:
for (let color of colors) {
    console.log("Color from for...of:", color);
}
