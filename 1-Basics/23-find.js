// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str) {
  let utfArr = [];
  for (i = 0; i < str.length; i++) {
    utfArr.push(str.charCodeAt(i) + 1);
  }
  // take 'z' into consideration
  // let utfArr2 = utfArr.map((el) => (el === 123 ? 97 : el));
  let finalString = String.fromCharCode(...utfArr);
  return finalString;
}

function myFunction2(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) => String.fromCharCode(e.charCodeAt() + 1));
  return correctedArray.join('');
}
