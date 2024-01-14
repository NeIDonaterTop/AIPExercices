// Задание 1
let result1 = every([1, 2, 3, 4, 5], elem => elem > 0);
console.log(result1);

// Задание 2
let result2 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);
console.log(result2);

// Задание 3
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let result3 = each(arr, (elem, index) => elem * index > 10);
console.log(result3);
