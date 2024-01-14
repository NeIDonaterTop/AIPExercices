// Задание 1
const arr1 = [1, 2, 3, 4, 5];
const positiveNumbers = arr1.filter(elem => elem > 0);
console.log(positiveNumbers);

// Задание 2
const arr2 = [1, -2, 3, -4, 5];
const negativeNumbers = arr2.filter(elem => elem < 0);
console.log(negativeNumbers);

// Задание 3
const arr3 = [1, 7, 3, 9, 5];
const betweenZeroAndTen = arr3.filter(elem => elem > 0 && elem < 10);
console.log(betweenZeroAndTen);

// Задание 4
const arr4 = ['apple', 'banana', 'kiwi', 'strawberry', 'blueberry'];
const longStrings = arr4.filter(str => str.length > 5);
console.log(longStrings);

// Задание 5
const arr5 = [2, 3, 4, 5];
const filteredNumbers = arr5.filter((elem, index) => elem * index < 30);
console.log(filteredNumbers);

// Задание 6
const arr6 = [1, 2, [3, 4], 5, [6, 7]];
const flatArray = arr6.filter(elem => !Array.isArray(elem));
console.log(flatArray);

// Задание 7
const arr7 = [1, -2, 3, -4, 5];
const negativeCount = arr7.filter(elem => elem < 0).length;
console.log(negativeCount);
