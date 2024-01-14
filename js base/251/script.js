// Задание №1
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', addExclamation);
});

function addExclamation() {
  this.textContent += '!';
}

// Задание №2
let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('blur', squareNumber);
});

function squareNumber() {
  let value = parseInt(this.value);
  this.value = value * value;
}
