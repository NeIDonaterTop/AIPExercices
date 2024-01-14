// Задание 1
const arr1 = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr1));

// Задание 2
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
  return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}
console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));

// Задание 3
const arr3 = [1, 2, 3, 4, 5];
const minValue = Math.min(...arr3);
console.log(minValue);
