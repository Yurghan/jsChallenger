// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a) {
  return Number((Math.round(a * 100) / 100).toFixed(2));
}

function myFunction2(a) {
  return Number(a.toFixed(2));
}
