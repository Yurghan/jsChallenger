// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a, b) {
  let result = {};
  a.forEach((el, i) => {
    result[el] = b[i];
  });
  console.log(result);
}

myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2]);
