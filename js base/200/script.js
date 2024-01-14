// Задание 1
const arr1 = [1, 2, 3, 4, 5];
const allGreaterThanZero = arr1.every(elem => elem > 0);
console.log(allGreaterThanZero);

// Задание 2
const arr2 = [2, 3, 4, 5];
const productLessThan30 = arr2.every((elem, index) => elem * index < 30);
console.log(productLessThan30);
