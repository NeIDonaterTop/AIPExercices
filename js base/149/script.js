// Задание 1
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);

// Задание 2
let arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6);
console.log(arr2);

// Работа с shift, pop
// Задание 3
let arr3 = [1, 2, 3];
let firstElement = arr3.shift();
console.log(firstElement);

// Задание 4
let arr4 = [1, 2, 3];
let lastElement = arr4.pop();
console.log(lastElement);

// Работа с slice
// Задание 5
let arr5 = [1, 2, 3, 4, 5];
let slicedArr5 = arr5.slice(0, 3);
console.log(slicedArr5);

// Задание 6
let arr6 = [1, 2, 3, 4, 5];
let newArr6 = arr6.slice(3);
console.log(newArr6);

// Работа с splice
// Задание 7
let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 2);
console.log(arr7);

// Задание 8
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 0, 'a', 'b', 'c');
console.log(arr8);

// Задание 9
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 0, 'a', 'b');
arr9.splice(6, 0, 'c');
arr9.splice(8, 0, 'e');
console.log(arr9);

// Работа с indexOf
// Задание 10
let arr10 = [1, 2, 3, 4, 5];
let indexOf3 = arr10.indexOf(3);
console.log(indexOf3);

// Работа с includes
// Задание 11
let arr11 = [1, 2, 3, 4, 5];
let includes3 = arr11.includes(3);
console.log(includes3);
