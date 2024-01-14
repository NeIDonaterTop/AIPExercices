// Задание 1
// Выведет {a: '!', b: 2, c: 3}, так как объект передается по ссылке
function func(obj) {
  obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj);

// Задание 2
// Выведет {a: 1, b: 2, c: 3}, так как внутри функции arg является простым значением (не объектом)
function func(arg) {
  arg = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj.a);
console.log(obj);

// Задание 3
// Выведет {a: 1, b: 2, c: 3}, так как внутри функции obj является простым значением (не объектом)
function func(obj) {
  obj = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj.a);
console.log(obj);

// Задание 4
// Выведет [1, 3], так как метод splice изменяет массив по ссылке
function func(arr) {
  arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

// Задание 5
// Выведет [1, 2, 3], так как метод slice создает новый массив, не изменяя оригинальный
function func(arr) {
  arr.slice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

// Задание 6
// Выведет ['!', 2, 3], так как newArr и arr ссылаются на один и тот же массив
function func(arr) {
  let newArr = arr;
  newArr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);
