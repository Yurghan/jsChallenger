// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function myFunction(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    let finalVal = val === '' || val.split('').every((v) => v === ' ') ? null : val;
    return { ...acc, [key]: finalVal };
  }, {});
}

function myFunction2(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}
