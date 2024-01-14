// Задание 1
// Выведет 1, так как localNum - локальная переменная функции
function func(localNum) {
  console.log(localNum);
}

func(1);

// Задание 2
// Выведет 1, так как localNum - локальная переменная функции, принимающая значение num
function func(localNum) {
  console.log(localNum);
}

let num = 1;
func(num);

// Задание 3
// Ничего не выведет, так как num внутри функции не видна
function func(localNum) {
  console.log(localNum);
}

let num = 1;
func(num);
num = 2;

// Задание 4
// Выведет 2, так как localNum принимает значение глобальной переменной num
let num = 1;

function func(localNum) {
  console.log(localNum);
}

num = 2;
func(num);

// Задание 5
// Ничего не выведет, так как localNum - локальная переменная функции
function func(localNum) {
  localNum = 2;
}

let num = 1;
func(num);
console.log(num);

// Задание 6
// Выведет 2, так как внутри функции меняется глобальная переменная num
function func(localNum) {
  num = 2;
}

let num = 1;
func(num);
console.log(num);

// Задание 7
// Выведет 1, так как переменная num внутри функции - локальная
function func(localNum) {
  let num = 2;
}

let num = 1;
func(num);
console.log(num);
