// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return b.split(a).length - 1;
}

// to zadziała bez względu na wielkość liter - regular expression
// b.split(new RegExp(a, 'gi')).length - 1
