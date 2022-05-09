// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b) {
  let result = new Set([...a, ...b].sort((a, b) => a - b));
  return [...result];
}
