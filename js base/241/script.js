// Задание 1
let elem = document.querySelector('#elem');

function func1() {
    console.log('1');
}

function func2() {
    console.log('2');
}

function func3() {
    console.log('3');
}

elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);
