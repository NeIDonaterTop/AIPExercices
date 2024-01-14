// Задание 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = ['a', ...arr1, 'b', 'c', ...arr2];
console.log(arr);

// Задание 2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);

// Задание 3
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr = ['a', 'b', 'c', ...arr2];
console.log(arr);

// Задание 4
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];
let arr = [0, ...arr3];
console.log(arr);

// Задание 5
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);
