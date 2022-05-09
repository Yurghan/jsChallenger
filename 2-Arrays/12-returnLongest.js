// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

function myFunction2(arr) {
  let index = 0;
  let longest = 0;
  arr.forEach((el, i) => {
    if (el.length > longest) {
      index = i;
      longest = el.length;
    }
  });

  return arr[index];
}
