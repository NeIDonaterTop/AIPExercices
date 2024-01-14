// Задача 1
let arr1 = [];

for (let i1 = 1; i1 <= 10; i1++) {
    arr1.push(i1);
}

console.log(arr1);
// Задача 2
let arr2 = [];

for (let i2 = 1; i2 <= 10; i2++) {
    arr2.push('x');
}

console.log(arr2);
// Задача 3
let arr3 = [1, -2, 3, -4, 5, -6];
let positiveNumbers = [];

for (let num of arr3) {
    if (num > 0) {
        positiveNumbers.push(num);
    }
}

console.log(positiveNumbers);
