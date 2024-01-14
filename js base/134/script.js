// Задание 1
let arr1 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];
console.log(arr1[3][2]); 
console.log(arr1[1][1]); 
console.log(arr1[2][0]); 
console.log(arr1[0][0]); 

// Задание 2
let arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let sum = arr2[0][0] + arr2[0][1] + arr2[1][0] + arr2[1][1] + arr2[2][0] + arr2[2][1];
console.log(sum);

// Задание 3
let arr3 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum3 = arr3[0][0][0] + arr3[0][0][1] + arr3[0][1][0] + arr3[0][1][1] +
  arr3[1][0][0] + arr3[1][0][1] + arr3[1][1][0] + arr3[1][1][1];
console.log(sum3);

// Задание 4
let arr4 = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum4 = arr4[0][0] + arr4[0][1] + arr4[0][2] +
  arr4[0][3][0] + arr4[0][3][1] +
  arr4[0][3][2][0] + arr4[0][3][2][1] +
  arr4[1][0] +
  arr4[1][1][0] + arr4[1][1][1];
console.log(sum4);
