// Task 1
let input1 = document.querySelector('#input1');
let paragraph1 = document.querySelector('#paragraph1');

input1.addEventListener('change', function() {
  paragraph1.textContent = this.value;
});

// Task 2
let checkbox2 = document.querySelector('#checkbox2');

checkbox2.addEventListener('change', function() {
  console.log(this.checked);
});
// Task 1
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

input1.addEventListener('input', function() {
  if (this.value.length === 2) {
    input2.focus();
  }
});

input2.addEventListener('input', function() {
  if (this.value.length === 2) {
    this.blur();
  }
});
