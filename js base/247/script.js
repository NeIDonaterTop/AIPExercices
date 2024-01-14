// Задание №1
let elem1 = document.getElementById('elem1');

elem1.addEventListener('focus', function() {
  elem1.value = 1;
});

elem1.addEventListener('blur', function() {
  elem1.value = 2;
});

// Задание №2
let elem2 = document.getElementById('elem2');

elem2.addEventListener('blur', function() {
  let number = parseFloat(elem2.value) || 0;
  alert('Square: ' + Math.pow(number, 2));
});

// Задание №3
let elem3 = document.getElementById('elem3');

elem3.addEventListener('focus', function() {
  elem3.value = '';
});
