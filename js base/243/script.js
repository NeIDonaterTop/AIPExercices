// №1
let paragraph1 = document.getElementById('paragraph1');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
  console.log(paragraph1.textContent);
});

// №2
let paragraph2 = document.getElementById('paragraph2');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
  paragraph2.textContent = 'New Text';
});

// №3
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function() {
  let sum = parseInt(number1.textContent) + parseInt(number2.textContent);
  alert('Sum: ' + sum);
});

// №4
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let resultDiv = document.getElementById('resultDiv');
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function() {
  let sum = parseInt(num1.textContent) + parseInt(num2.textContent) + parseInt(num3.textContent);
  resultDiv.textContent = 'Sum: ' + sum;
});

// №5
let incrementParagraph = document.getElementById('incrementParagraph');
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function() {
  let currentValue = parseInt(incrementParagraph.textContent);
  incrementParagraph.textContent = currentValue + 1;
});

// №6
let exclamationParagraph = document.getElementById('exclamationParagraph');
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', function() {
  exclamationParagraph.textContent += '!';
});
