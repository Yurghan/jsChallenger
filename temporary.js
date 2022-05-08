// liczba pierwsza
// 1. podzielna tylko przez siebie i 1
// 2. Większa niż 1

function prime(a) {
  let counter = 0;
  let checker = a;
  while (checker > 0) {
    if (a % checker === 0) counter++;
    checker--;
  }

  // mam liczbę pierwszą
  if (counter === 2 && a > 1) {
    console.log('pierwsza');
  }
  // nie mam liczby pierwszej
  else {
    let isItPrime = false;
    let finder = a;
    while (!isItPrime) {
      finder++;
      let finderHelper = finder;
      let counter2 = 0;
      while (finderHelper > 0) {
        if (a % finderHelper === 0) counter2++;
        finderHelper--;
      }
      if (counter2 === 2) {
        console.log(finder);
        isItPrime = true;
      }
    }
  }
}

prime(4);
