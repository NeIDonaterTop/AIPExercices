// Задание №1
let elem1 = document.getElementById('elem1');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
  alert(elem1.value);
});

// Задание №2
let elem2 = document.getElementById('elem2');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
  elem2.value = 'New Text';
});

// Задание №3
let input3 = document.getElementById('input3');
let paragraph3 = document.getElementById('paragraph3');
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function() {
  paragraph3.textContent = input3.value;
});

// Задание №4
let input4 = document.getElementById('input4');
let result4 = document.getElementById('result4');
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function() {
  let number = parseFloat(input4.value);
  if (!isNaN(number)) {
    result4.value = Math.pow(number, 2);
  } else {
    alert('Please enter a valid number.');
  }
});

// Задание №5
let input5a = document.getElementById('input5a');
let input5b = document.getElementById('input5b');
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function() {
  let temp = input5a.value;
  input5a.value = input5b.value;
  input5b.value = temp;
});

// Задание №6
let input6a = document.getElementById('input6a');
let input6b = document.getElementById('input6b');
let input6c = document.getElementById('input6c');
let input6d = document.getElementById('input6d');
let input6e = document.getElementById('input6e');
let averageResult = document.getElementById('averageResult');
let btn6 = document
