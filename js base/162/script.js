// Задание 1
function func(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return num1 * num2;
  } else {
    return num1 - num2;
  }
}

console.log(func(3, 4));
// Выведет 12. Условие (3 > 0 && 4 > 0) выполняется, возвращается 3 * 4.

