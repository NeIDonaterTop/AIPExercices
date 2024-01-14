// Функция, возвращающая функцию в JavaScript

// Задание 1
function func1() {
  return function () {
    return 1;
  };
}

function func2() {
  return function () {
    return 2;
  };
}

let sum = func1()() + func2()();
console.log(sum); 


console.log(func()()()); 

// Задание 2
function func() {
  return function () {
    return function () {
      return function () {
        return function () {
          return '!';
        };
      };
    };
  };
}

console.log(func()()()()()()); 


// Задание 3
function func(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(func(2)(3)(4)); 

// Задание 4
function func(num1) {
  const numbers = [num1];

  function innerFunc(num) {
    if (num !== undefined) {
      numbers.push(num);
      return innerFunc;
    } else {
      return numbers;
    }
  }

  return innerFunc;
}

console.log(func(2)(3)(4)(5)()); 
