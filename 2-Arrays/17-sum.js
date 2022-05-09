// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  return a.filter((el) => el > b).reduce((prev, curr) => prev + curr);
}
