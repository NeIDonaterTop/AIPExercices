// Task 1
let select = document.querySelector('#select');

for (let option of select.options) {
  if (option.selected) {
    option.textContent += '!';
  } else {
    option.textContent += '?';
  }
}
// Task 2
let select = document.querySelector('#select');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
  select[select.length - 1].selected = true;
});
// Task 3
let select = document.querySelector('#select');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
  alert(select[select.selectedIndex].textContent);
});
// Task 4
let select = document.querySelector('#select');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
  select[select.selectedIndex].textContent += '!';
});

