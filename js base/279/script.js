// Task 1
let select = document.querySelector('#select');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  select.value = 'one';
});

// Task 2
let monthsSelect = document.querySelector('#months');

let currentMonth = new Date().getMonth() + 1;

monthsSelect.value = currentMonth.toString();
