// Задание 1
const arr1 = [1, 4, 9, 16, 25];
const result1 = arr1.map(Math.sqrt);
console.log(result1);

// Задание 2
const arr2 = ['a!', 'b!', 'c!', 'd!', 'e!'];
const result2 = arr2.map(str => str + '!');
console.log(result2);

// Задание 3
const arr3 = ['cba', 'fed', 'ihg'];
const result3 = arr3.map(str => str.split('').reverse().join(''));
console.log(result3);

// Задание 4
const arr4 = ['123', '456', '789'];
const result4 = arr4.map(str => str.split('').map(Number));
console.log(result4);

// Задание 5
const arr5 = [0, 1, 2, 3, 4];
const result5 = arr5.map((elem, index) => elem * index);
console.log(result5);

// Задание 6
const arr6 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result6 = arr6.map(subarr => subarr.map(num => num * num));
console.log(result6);
