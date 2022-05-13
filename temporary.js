// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
function myFunction(a) {
  let myObj = {};
  a.forEach((el) => {
    if (Object.keys(myObj).includes(`${el}`)) {
      myObj[el]++;
    } else {
      myObj[el] = 1;
    }
  });
  return myObj;
}

console.log(myFunction([9, 9, 9, 99]));
