// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
function myFunction(arr) {
  let result = {};
  arr.forEach((el) => {
    const whatChar = el.charAt(0).toLowerCase();
    result[whatChar] = arr.filter((el) => el.charAt(0).toLowerCase() === whatChar);
  });

  return result;
}

function myFunction2(arr) {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
}
