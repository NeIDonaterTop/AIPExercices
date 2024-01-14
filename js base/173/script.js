// Задание 1
// Выведет 1, так как локальная переменная num внутри функции отличается от глобальной переменной num
function func(num) {
  console.log(num);
}

let num = 1;
func(num);

// Задание 2
// Выдаст ошибку, так как переменная num внутри функции не объявлена
function func() {
  num = 2;
}

let num = 1;
func();
console.log(num);

// Задание 3
// Выдаст ошибку, так как переменная num внутри функции не видна снаружи
function func() {
  let num = 2;
}

let num = 1;
func();
console.log(num);
