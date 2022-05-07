// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b) {
  return a.split(b).length > 1 ? b.concat(a) : a.concat(b);
}

function myFunction2(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}
