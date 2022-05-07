// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

let number = 26.1379;
let final = Number((Math.round(number * 100) / 100).toFixed(2));

console.log(final);
