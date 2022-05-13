// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function myFunction(obj) {
  let newObj = {};
  Object.entries(obj).forEach(([key, val]) => {
    if (key === 'fn' || key === 'ln') newObj[key] = val;
    if (key === 'size') newObj[key] = `${val}cm`;
    if (key === 'weight') newObj[key] = `${val}kg`;
  });

  return newObj;
}

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}
