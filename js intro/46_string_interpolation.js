/* 46. String interpolation with expressions */
// You can use expressions inside template literals for dynamic strings.
let apples = 5;
console.log(`You have ${apples > 1 ? apples + " apples" : apples + " apple"}.`); // You have 5 apples.
let oranges = 1;
console.log(`You have ${oranges > 1 ? oranges + " oranges" : oranges + " orange"}.`); // You have 1 orange.
