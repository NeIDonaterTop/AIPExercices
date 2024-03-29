// Задание 1
// Создаем массив с тремя функциями
let arr = [
  function() {
    return 1;
  },
  function() {
    return 2;
  },
  function() {
    return 3;
  },
];

// Задание 2
// Вызываем соответствующую функцию и выводим результат в консоль
console.log(arr[2]()); 

// Задание 3
// Находим сумму результатов функций без цикла
let sum = arr[0]() + arr[1]() + arr[2]();
console.log(sum); 

// Задание 4
// Перебираем массив и выводим результаты в консоль
for (let func of arr) {
  console.log(func());
}
// Выведет:
// 1
// 2
// 3
