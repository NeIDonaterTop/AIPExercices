// Задание 1
// Создаем объект с тремя функциями
let obj = {
  func1: function() { console.log(1) },
  func2: function() { console.log(2) },
  func3: function() { console.log(3) },
};

// Задание 2
// Перебираем объект и вызываем каждую функцию
for (let key in obj) {
  obj[key]();
}

// Задание 3
// Создаем объект с тремя функциями, принимающими массивы
let mathOperations = {
  sum: function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  },
  sumOfSquares: function(arr) {
    return arr.reduce((acc, num) => acc + num ** 2, 0);
  },
  sumOfCubes: function(arr) {
    return arr.reduce((acc, num) => acc + num ** 3, 0);
  },
};

// Пример использования
let numbers = [1, 2, 3, 4];
console.log(mathOperations.sum(numbers)); 
console.log(mathOperations.sumOfSquares(numbers)); 
console.log(mathOperations.sumOfCubes(numbers)); 
