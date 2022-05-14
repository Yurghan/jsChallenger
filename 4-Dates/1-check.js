// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  return a.toISOString() === b.toISOString();
}

function myFunction2(a, b) {
  return a.getTime() === b.getTime();
}
