// / Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}

function myFunction2(a, b) {
  let newOne = a;
  Object.keys(newOne).forEach((el) => {
    newOne[el] *= b;
  });
  return newOne;
}
