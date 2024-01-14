// Задание 1
let result1 = Math.pow(2, 10);
console.log(result1);

// Задание 2
let result2 = Math.sqrt(245);
console.log(result2);

// Задание 3
let arr = [4, 2, 5, 19, 13, 0, 10];
let sumCubedRoot = Math.sqrt(arr.reduce((sum, num) => sum + Math.pow(num, 3), 0));
console.log(sumCubedRoot);

// Работа с функциями округления
// Задание 4
let num4 = 379;
let roundedNum4 = {
  integer: Math.round(Math.sqrt(num4)),
  tenths: Math.round(Math.sqrt(num4) * 10) / 10,
  hundredths: Math.round(Math.sqrt(num4) * 100) / 100,
};
console.log(roundedNum4);

// Задание 5
let num5 = 587;
let roundedNum5 = {
  floor: Math.floor(Math.sqrt(num5)),
  ceil: Math.ceil(Math.sqrt(num5)),
};
console.log(roundedNum5);

// Нахождение максимального и минимального числа
// Задание 6
let numbers = [4, -2, 5, 19, -130, 0, 10];
let minMaxResult = {
  min: Math.min(...numbers),
  max: Math.max(...numbers),
};
console.log(minMaxResult);

// Работа с рандомом
// Задание 7
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

// Задание 8
let randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomArray);

// Работа с модулем
// Задание 9
let a = 7;
let b = -15;
let absoluteDifference = Math.abs(a - b);
console.log(absoluteDifference);
Phase 2
// Работа со степенью и корнем
// Задание 1
let result1 = Math.pow(2, 10);
console.log(result1);

// Задание 2
let result2 = Math.sqrt(245);
console.log(result2);

// Задание 3
let arr = [4, 2, 5, 19, 13, 0, 10];
let sumCubedRoot = Math.sqrt(arr.reduce((sum, num) => sum + Math.pow(num, 3), 0));
console.log(sumCubedRoot);

// Работа с функциями округления
// Задание 4
let num4 = 379;
let roundedNum4 = {
  integer: Math.round(Math.sqrt(num4)),
  tenths: Math.round(Math.sqrt(num4) * 10) / 10,
  hundredths: Math.round(Math.sqrt(num4) * 100) / 100,
};
console.log(roundedNum4);

// Задание 5
let num5 = 587;
let roundedNum5 = {
  floor: Math.floor(Math.sqrt(num5)),
  ceil: Math.ceil(Math.sqrt(num5)),
};
console.log(roundedNum5);

// Нахождение максимального и минимального числа
// Задание 6
let numbers = [4, -2, 5, 19, -130, 0, 10];
let minMaxResult = {
  min: Math.min(...numbers),
  max: Math.max(...numbers),
};
console.log(minMaxResult);

// Работа с рандомом
// Задание 7
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

// Задание 8
let randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomArray);

// Работа с модулем
// Задание 9
let a = 7;
let b = -15;
let absoluteDifference = Math.abs(a - b);
console.log(absoluteDifference);

