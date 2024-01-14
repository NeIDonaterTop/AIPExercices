// Задание №1
let inputs = document.querySelectorAll('.input');

for (let input of inputs) {
  input.addEventListener('blur', function () {
    this.value = Number(this.value) + 1;
  });
}

// Задание №2
let numberParagraphs = document.querySelectorAll('.number');

for (let numberParagraph of numberParagraphs) {
  numberParagraph.addEventListener('click', function () {
    let number = Number(this.textContent);
    this.textContent = number * number;
  });
}
