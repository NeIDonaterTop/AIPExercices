// Функции-коллбэки в JavaScript

// Реализация функции each
function each(arr, callback) {
  let result = [];
  
  for (let elem of arr) {
    result.push(callback(elem)); 
  }
  
  return result;
}

// Задание 1
function double(num) {
  return num * 2;
}

let result1 = each([1, 2, 3, 4, 5], double);
console.log(result1); 

// Задание 2
function reverseString(str) {
  return str.split('').reverse().join('');
}

let result2 = each(["apple", "banana", "cherry"], reverseString);
console.log(result2); 

// Задание 3
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let result3 = each(["apple", "banana", "cherry"], capitalizeFirstLetter);
console.log(result3); 

function square(num) {
  return num * num;
}

let result4 = each([1, 2, 3, 4, 5], square);
console.log(result4); 
