// Задание №1
let elems1 = document.querySelectorAll('.www');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function () {
  for (let elem of elems1) {
    elem.textContent = 'text';
  }
});

// Задание №2
let elems2 = document.querySelectorAll('[id^="paragraph"]');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function () {
  elems2.forEach((elem, index) => {
    elem.textContent = 'Text' + (index + 1);
  });
});

// Задание №3
let inputs = document.querySelectorAll('input[type="number"]');
let sumParagraph = document.getElementById('sumParagraph');
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function () {
  let sum = 0;

  inputs.forEach(input => {
    sum += parseInt(input.value);
  });

  sumParagraph.textContent = 'Sum: ' + sum;
});
