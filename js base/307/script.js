// Задания 1
let elem = document.querySelector('#elem');

setInterval(function() {
  elem.value = Number(elem.value) + 1; 
}, 1000);
// Задания 2
let elem = document.querySelector('#elem');

setInterval(function() {
  elem.value = Number(elem.value) - 1; 
}, 1000);
// Задание 3
let elem = document.querySelector('#elem');

let timerId = setInterval(function() {
  elem.value = Number(elem.value) - 1;
  if (elem.value == 0) {
    clearInterval(timerId);
  }
}, 1000);
