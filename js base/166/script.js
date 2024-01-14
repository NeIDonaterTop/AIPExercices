// Задание 1
// Ошибка: func1() и func2() выводят в консоль, но не возвращают значения.
// Исправление: функции должны возвращать числа, а не выводить их в консоль.
function func1() {
  return 3;
}

function func2() {
  return 5;
}

console.log(func1() + func2());

// Задание 2
// Ошибка: return res; находится внутри цикла, что приводит к преждевременному выходу из функции.
// Исправление: return res; должен быть за пределами цикла.
function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

console.log(sum([1, 2, 3, 4, 5]));

// Задание 3
// Ошибка: фактически функция делает всё верно, но не вызывается.
// Исправление: вызвать функцию, например, func(arr);
let arr = [1, 2, 3, 4, 5];

function func(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  console.log(res);
}

func(arr);

// Задание 4
// Ошибка: func1 и func2 - это функции, их нужно вызвать, чтобы получить результат.
// Исправление: вызвать функции func1() и func2().
function func1() {
  return 3;
}

function func2() {
  return 5;
}

console.log(func1() + func2());

// Задание 5
// Ошибка: в функции sum(arr) используется переменная elem, которая не объявлена в теле функции.
// Исправление: заменить elem на sum в return.
let sum = sum([1, 2, 3, 4, 5]);

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

console.log(sum);

// Задание 6
// Ошибка: не возвращается результат из функции sum(arr).
// Исправление: добавить return sum; в конце функции sum(arr).
let res = sum([1, 2, 3, 4, 5]);

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

console.log(res);

// Задание 7
// Ошибка: если число не меньше 10, функция должна возвращать само число, иначе '0' + num.
// Исправление: добавить return num; после if.
function add(num) {
  if (num <= 9) {
    return '0' + num;
  }
  
  return num;
}

// Задание 8
// Ошибка: переменная sum внутри функции перекрывает имя самой функции sum(arr).
// Исправление: переименовать переменную sum внутри функции, например, в result.
let arr = [1, 2, 3, 4, 5];
let sumResult = sum(arr);

function sum(arr) {
  let result = 0;

  for (let elem of arr) {
    result += elem;
  }

  return result;
}

console.log(sumResult);

// Задание 9
// Ошибка: num.split('') возвращает массив строк, а не чисел, поэтому sum += elem; приводит к конкатенации строк.
// Исправление: изменить строку на sum += parseInt(elem);
let num = 12345;
let res = getDigitsSum(num);

function getDigitsSum(num) {
  let arr = num.toString().split('');
  let sum = 0;

  for (let elem of arr) {
    sum += parseInt(elem);
  }

  return sum;
}

console.log(res);

// Задание 10
// Ошибка: функция возвращает true или false после первой итерации цикла.
// Исправление: нужно вернуть false только после завершения цикла.
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(13)); 
