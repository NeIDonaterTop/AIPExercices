// Задание 1
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

function func1() {
    console.log(1);
}

function func2() {
    console.log(2);
}

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
