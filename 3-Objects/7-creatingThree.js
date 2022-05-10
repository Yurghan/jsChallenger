// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b) {
  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

function myFunction2(a, b) {
  let result = {};
  a.forEach((el, i) => {
    result[el] = b[i];
  });
  return result;
}
