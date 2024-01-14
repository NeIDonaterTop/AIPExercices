// Задание №1
let input = document.getElementById('elem');

input.addEventListener('focus', function() {
  this.value = 1;
});

input.addEventListener('blur', function() {
  this.value = 2;
});

// Задание №2
let button = document.getElementById('button');

button.addEventListener('click', function() {
  let currentValue = parseInt(this.value);
  this.value = currentValue + 1;
});
