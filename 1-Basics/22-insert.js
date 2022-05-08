// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let temp = a
    .split('')
    .reverse()
    .map((el, i, arr) => {
      if ((i + 1) % 3 === 0 && i < arr.length - 1) return b + el;
      else return el;
    })
    .reverse()
    .join('');
}

function myFunction2(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
}
