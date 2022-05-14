// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

function myFunction(a, b) {
  return a.getTime() + b * 24 * 60 * 60 * 1000;
}

function myFunction2(a, b) {
  const currentDays = a.getDate();
  return a.setDate(currentDays + b);
}
