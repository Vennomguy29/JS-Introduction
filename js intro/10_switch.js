// 10. Switch statement
// The switch statement is useful for checking a variable against many values.
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// You can use switch for numbers, strings, etc.
let grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good job!");
        break;
    default:
        console.log("Keep trying!");
}
