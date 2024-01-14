// Задание №2
let elem1 = document.getElementById('elem1');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
  alert(elem1.getAttribute('type'));
});

// Задание №3
let elem2 = document.getElementById('elem2');
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function() {
  elem2.setAttribute('type', 'submit');
});

// Задание №4
let link = document.getElementById('link');
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function() {
  alert(link.getAttribute('href'));
});

// Задание №5
let link2 = document.getElementById('link2');
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function() {
  link2.textContent += ' (' + link2.getAttribute('href') + ')';
});

// Задание №6
let image = document.getElementById('image');
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', function() {
  alert(image.getAttribute('src'));
});

// Задание №7
let image2 = document.getElementById('image2');
let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', function() {
  image2.setAttribute('width', parseInt(image2.getAttribute('width')) * 2);
});

// Задание №8
let image3 = document.getElementById('image3');
let btn8_1 = document.getElementById('btn8_1');
let btn8_2 = document.getElementById('btn8_2');

btn8_1.addEventListener('click', function() {
  image3.setAttribute('src', 'path/to/image1.jpg');
});

btn8_2.addEventListener('click', function() {
  image3.setAttribute('src', 'path/to/image2.jpg');
});
