// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function test(a) {
  let counter = 0;

  do {
    counter = 0;
    for (let i = 1; i <= a; i++) {
      if (a % i === 0) counter++;
    }
    a++;
  } while (counter !== 2);
  return a - 1;
}

function myFunction(a) {
  let counter = 0;

  do {
    counter = 0;
    for (let i = 2; i <= a; i++) {
      if (a % i === 0) counter++;
    }
    a++;
  } while (counter > 1);
  return a - 1;
}

function myFunction2(a) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = a;
  while (!isPrime(n)) n++;
  return n;
}

function prime(a) {
  let counter = 0;
  let checker = a;
  while (checker > 0) {
    if (a % checker === 0) counter++;
    checker--;
  }

  // mam liczbę pierwszą
  if (counter === 2 && a > 1) {
    return a;
  }
  // nie mam liczby pierwszej
  else {
    let isItPrime = false;
    let checker2 = a;

    // przechodzenie do wyżej liczby o 1 tak długo aż nie znajdę pierwszej
    while (!isItPrime) {
      checker2++;
      let checker2Helper = checker2;
      let counter2 = 0;

      // sprawdzanie czy jest pierwszy
      while (checker2Helper > 0) {
        if (checker2 % checker2Helper === 0) counter2++;
        checker2Helper--;
      }

      if (counter2 === 2) {
        isItPrime = true;
        return checker2;
      }
    }
  }
}
