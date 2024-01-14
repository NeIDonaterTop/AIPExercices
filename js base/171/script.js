// Задание 1
// Выведет 2, так как внутри функции изменяется глобальная переменная num
let num = 1;

function func() {
  num = 2;
}
func();

console.log(num);

// Задание 2
// Выведет 1, так как вызов функции func() произойдет после вывода в консоль
let num = 1;

function func() {
  num = 2;
}

console.log(num);

// Задание 3
// Ошибка: переменная num не видна вне функции
let num = 1;

function func() {
  let num = 2;
}
func();

console.log(num);

// Задание 4
// Ошибка: переменная num не видна вне функции
let num = 1;

function func() {
  let num = 2;
}

console.log(num);
func();

// Задание 5
// Ошибка: переменная num не видна вне функции
let num = 1;

function func() {
  num = 2;
}

console.log(num);
func();

// Задание 6
// Выведет 4, так как переменная num меняется внутри функции три раза
let num = 1;

function func() {
  num++;
}

func();
func();
func();
console.log(num);

// Задание 7
// Ошибка: переменная num не видна до объявления функции
function func() {
  num = 2;
}

let num = 1;
console.log(num);
func();

// Задание 8
// Выведет 2, так как вызов функции func() произойдет после изменения глобальной переменной
function func() {
  num = 2;
}

let num = 1;
func();
console.log(num);
