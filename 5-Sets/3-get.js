// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
  b.forEach((el) => {
    a.add(el);
  });

  return a;
}

function myFunction2(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
