// Задание 1
// Создаем функцию test, параметрами принимающую 3 функции
// и выводящую в консоль сумму результатов функций.
function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}

// Вызываем функцию test, передавая три анонимные функции,
// возвращающие числа 1, 2 и 3.
test(
  function() { return 1; },
  function() { return 2; },
  function() { return 3; }
);

// Задание 2
// Создаем функцию test, параметрами принимающую 3 функции
// и возвращающую сумму результатов функций.
function test(func1, func2, func3) {
  return func1() + func2() + func3();
}

// Вызываем функцию test, передавая три анонимные функции,
// возвращающие числа 1, 2 и 3. Выводим результат в консоль.
console.log(test(
  function() { return 1; },
  function() { return 2; },
  function() { return 3; }
));

// Задание 3
// Создаем три функции, объявленные как Function Declaration.
function func1() { return 1; }
function func2() { return 2; }
function func3() { return 3; }

// Вызываем функцию test, передавая созданные функции.
console.log(test(func1, func2, func3));

// Задание 4
// Создаем три функции, объявленные как Function Expression.
let func1 = function() { return 1; };
let func2 = function() { return 2; };
let func3 = function() { return 3; };

// Вызываем функцию test, передавая созданные функции.
console.log(test(func1, func2, func3));

// Задание 5
// Создаем функцию test, параметрами принимающую число и функцию,
// применяющую эту функцию к числу и выводящую результат в консоль.
function test(num, func) {
  console.log(func(num));
}

// Вызываем функцию test, передавая число 3 и анонимную функцию,
// возводящую число в куб. Выводим результат в консоль.
test(3, function(num) {
  return num * num * num;
});

// Задание 6
// Создаем функцию test, параметрами принимающую число и Function Declaration.
function test(num, func) {
  console.log(func(num));
}

// Вызываем функцию test, передавая число 3 и созданную Function Declaration func.
test(3, function getCube(num) {
  return num * num * num;
});

// Задание 7
// Создаем функцию test, параметрами принимающую число и Function Expression.
function test(num, func) {
  console.log(func(num));
}

// Вызываем функцию test, передавая число 3 и созданную Function Expression func.
test(3, function getCube(num) {
  return num * num * num;
});

// Задание 8
// Создаем функцию test, параметрами принимающую два числа и функцию,
// применяющую эту функцию к числам и выводящую результат в алерт.
function test(num1, num2, func) {
  alert(func(num1, num2));
}

// Вызываем функцию test, передавая числа 2 и 3, а также анонимную функцию,
// возвращающую их сумму. Результат алертом.
test(2, 3, function(num1, num2) {
  return num1 + num2;
});

// Задание 9
// Создаем функцию test, параметрами принимающую число и две функции.
// Возвращаем сумму результатов переданных функций.
function test(num, func1, func2) {
  return func1(num) + func2(num);
}

// Вызываем функцию test, передавая число 3, анонимную функцию, возводящую
// число в квадрат, и анонимную функцию, возводящую число в куб.
// Выводим результат работы в консоль.
console.log(test(3, function(num) { return num * num; }, function(num) { return num * num * num; }));

// Задание 10
// Создаем функцию test, параметрами принимающую массив и функцию.
// Применяем функцию к каждому элементу массива и возвращаем измененный массив.
function test(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}

// Вызываем функцию test, передавая массив [1, 2, 3] и анонимную функцию,
// возводящую каждый элемент массива в квадрат. Выводим результат в консоль.
console.log(test([1, 2, 3], function(num) { return num * num; }));

// Задание 11
// Вызываем функцию test, передавая массив с числами и анонимную функцию,
// возводящую каждый элемент массива в куб. Выводим результат в консоль.
console.log(test([2, 4, 6], function(num) { return num * num * num; }));
