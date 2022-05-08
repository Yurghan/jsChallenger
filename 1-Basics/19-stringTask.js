// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b) {
  const word1 = (a.charAt(0).toUpperCase() + a.slice(1)).replaceAll('%', '');
  const word2 = b
    .split('')
    .reverse()
    .filter((el) => el !== '%')
    .join('');

  return word1 + word2;
}
