// Задание 1
const arr1 = [-1, 0, 2, 3, 4];
const hasPositiveNumber = arr1.some(elem => elem > 0);
console.log(hasPositiveNumber);

// Задание 2
const arr2 = [1, 2, 3, 4, 5];
const productGreaterThan30 = arr2.some((elem, index) => elem * index > 30);
console.log(productGreaterThan30);
