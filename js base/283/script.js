// Task 1
let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function () {
  div.textContent = textarea.value; 
});
// Task 2
let checkbox = document.querySelector('input[type="checkbox"]'); 
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function () {
  if (checkbox.checked) {
    div.textContent = '111'; 
  } else {
    div.textContent = '222'; 
  }
});
// Task 3
let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function () {
  if (checkbox.checked) {
    console.log('+++');
  } else {
    console.log('---');
  }
});
