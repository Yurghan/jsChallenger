const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here

  const myCheckbox = document.getElementById('checkbox');
  myCheckbox.toggleAttribute('checked');
  console.log(myCheckbox);
});
