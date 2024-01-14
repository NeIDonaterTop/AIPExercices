// Задача 1
let arr1 = [2, 5, 9, 3, 1, 4];
let sum1 = 0;

for (let elem of arr1) {
    sum1 += elem;
}

console.log(sum1);
// Задача 2
let arr2 = [2, 5, 9, 3, 1, 4];
let sumEven2 = 0;

for (let elem of arr2) {
    if (elem % 2 === 0) {
        sumEven2 += elem;
    }
}

console.log(sumEven2);
// Задача 3
let arr3 = [2, 5, 9, 3, 1, 4];
let sumSquares3 = 0;

for (let elem of arr3) {
    sumSquares3 += elem ** 2;
}

console.log(sumSquares3);
// Задача 4
let arr4 = [2, 5, 9, 3, 1, 4];
let product4 = 1;

for (let elem of arr4) {
    product4 *= elem;
}

console.log(product4);
