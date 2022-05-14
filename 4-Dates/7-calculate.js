// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(a, b) {
  let result = {};
  result.hrs = Math.abs(a.getHours() - b.getHours());
  result.min = Math.abs(a.getMinutes() - b.getMinutes());
  result.sec = Math.abs(a.getSeconds() - b.getSeconds());
  return result;
}

function myFunction2(a, b) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec };
}
