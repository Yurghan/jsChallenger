// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
function myFunction(a, b) {
  let result = new Set();
  a.forEach((el) => {
    if (b.has(el)) result.add(el);
  });
  return result;
}
