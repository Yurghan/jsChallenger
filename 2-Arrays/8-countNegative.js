// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {
  return a.filter((el) => el < 0).length;
}

function myFunction(a) {
  let counter = 0;
  a.forEach((el) => {
    if (el < 0) counter++;
  });
  return counter;
}
