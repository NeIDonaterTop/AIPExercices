// Задание №1
let div1 = document.getElementById('div1');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
  alert(div1.className);
});

// Задание №2
let div2 = document.getElementById('div2');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
  div2.className = 'new-class';
});

// Задание №3
let div3 = document.getElementById('div3');
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function() {
  let classList = div3.className.split(' ');
  alert(classList);
});
