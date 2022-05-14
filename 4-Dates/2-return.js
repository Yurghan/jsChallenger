// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24;
}

function myFunction2(a, b) {
  const timeStamp1 = a.getTime();
  const timeStamp2 = b.getTime();
  const result = Math.abs(timeStamp1 - timeStamp2) / 1000 / 60 / 60 / 24;
  return result;
}
