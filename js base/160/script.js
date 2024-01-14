// Задание 1
function func(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
    return sum; 
  }
}

console.log(func(5));
// Выведет 1. Функция прерывается после первой итерации цикла.

// Исправленный вариант
function func(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

console.log(func(5));
// Теперь выведет 15. Сумма чисел от 1 до 5.
