// Task 1
button.addEventListener('click', function() {
  elem.disabled = !elem.disabled;
});

// Task 2
let checkbox = document.querySelector('#checkbox');
let button2 = document.querySelector('#button2');

button2.addEventListener('click', function() {
  checkbox.checked = !checkbox.checked;
});
