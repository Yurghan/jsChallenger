// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15
function myFunction(date) {
  let result = date.getMinutes();

  console.log(Math.ceil(result / 15) * 15);
}

myFunction(new Date(2021, 8, 10, 15, 1, 00));
