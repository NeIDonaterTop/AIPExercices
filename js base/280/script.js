// Task 1
let input = document.querySelector('#input');
let select = document.querySelector('#select');

input.addEventListener('blur', function() {
  let inputValue = parseInt(input.value);
  if (!isNaN(inputValue)) {
    select.selectedIndex = inputValue;
  }
});

// Task 2
let daysSelect = document.querySelector('#days');

let currentDay = new Date().getDay();

daysSelect.selectedIndex = currentDay;
