// Task 1
let radios1 = document.querySelectorAll('input[name="elem"]');
let button1 = document.querySelector('#button1');
let output1 = document.querySelector('#output1');

button1.addEventListener('click', function() {
  for (let radio of radios1) {
    if (radio.checked) {
      output1.textContent = radio.value;
    }
  }
});
