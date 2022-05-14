// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
  return Math.ceil(date.getMinutes() / 15) * 15;
}

function myFunction2(date) {
  const quarter = 15 * 60 * 1000;
  const closestQuarter = new Date(Math.round(date / quarter) * quarter);
  const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
  return nextQuarter.getMinutes();
}
