// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction(a, b, c) {
  console.log(new Set([a, b, c]));
}

myFunction('a', ['b'], { c: 3 });
