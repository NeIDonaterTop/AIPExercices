// Задание 1
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Задание 2
for (let i = 100; i >= 1; i--) {
  console.log(i);
}

// Задание 3
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// Задание 4
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push('x');
}
console.log(arr);

// Задание 5
let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

// Задание 6
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let elem of arr) {
  if (elem > 0 && elem < 10) {
    console.log(elem);
  }
}

// Задание 7
let arr = [1, 2, 3, 4, 5];
let hasFive = false;
for (let elem of arr) {
  if (elem === 5) {
    hasFive = true;
    break;
  }
}
console.log(hasFive);

// Задание 8
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
  sum += elem;
}
console.log(sum);

// Задание 9
let arr = [1, 2, 3, 4, 5];
let sumOfSquares = 0;
for (let elem of arr) {
  sumOfSquares += elem ** 2;
}
console.log(sumOfSquares);

// Задание 10
let arr = [1, 2, 3, 4, 5];
let average = arr.reduce((acc, elem) => acc + elem, 0) / arr.length;
console.log(average);

// Задание 11
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// Задание 12
let arr = [];
for (let i = 10; i >= 1; i--) {
  arr.push(i);
}
console.log(arr);

// Задание 13
let arr = [1, -2, 3, -4, 5];
let positiveSum = 0;
for (let elem of arr) {
  if (elem > 0) {
    positiveSum += elem;
  }
}
console.log(positiveSum);

// Задание 14
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
  let strElem = elem.toString();
  if (strElem[0] === '1' || strElem[0] === '2' || strElem[0] === '5') {
    console.log(elem);
  }
}

// Задание 15
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

// Задание 16
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === i + 1) {
    console.log(arr[i]);
  }
}

// Задание 17
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  document.write(elem + '<br>');
}

// Задание 18
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  document.write(`<p>${elem}</p>`);
}

// Задание 19
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let day of daysOfWeek) {
  if (day === 'Суббота' || day === 'Воскресенье') {
    document.write(`<strong>${day}</strong><br>`);
  } else {
    document.write(`${day}<br>`);
  }
}

// Задание 20
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDay = 3; 
for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === currentDay) {
    document.write(`<em>${daysOfWeek[i]}</em><br>`);
  } else {
    document.write(`${daysOfWeek[i]}<br>`);
  }
}

// Задание 21
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  obj[key] *= 1.1;
}
console.log(obj);

// Задание 22
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  if (obj[key] <= 400) {
    obj[key] *= 1.1;
  }
}
console.log(obj);

// Задание 23
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let newObj = {};

for (let i = 0; i < arr1.length; i++) {
  newObj[arr1[i]] = arr2[i];
}
console.log(newObj);

// Задание 24
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = 0;
let sumValues = 0;

for (let key in obj) {
  sumKeys += +key;
  sumValues += obj[key];
}

console.log(sumKeys / sumValues);

// Задание 25
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keysArray = [];
let valuesArray = [];

for (let key in obj) {
  keysArray.push(key);
  valuesArray.push(obj[key]);
}

console.log(keysArray);
console.log(valuesArray);

// Задание 26
let obj = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};
let newArr = [];

for (let key in obj) {
  if (obj[key].toString()[0] === '1' || obj[key].toString()[0] === '2') {
    newArr.push(obj[key]);
  }
}

console.log(newArr);

// Задание 27
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[i + 1] = arr[i];
}

console.log(obj);

// Задание 28
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = i + 1;
}

console.log(obj);
