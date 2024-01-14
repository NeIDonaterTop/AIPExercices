// Task 1
let select = document.querySelector('#select');

for (let option of select.options) {
  option.textContent += option.value;
}
