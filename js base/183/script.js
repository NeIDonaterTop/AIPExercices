// Вложенные функции в JavaScript

function func(num1, num2) {
  function square(num) {
    return num * num;
  }

  return square(num1) + square(num2);
}

console.log(func(2, 3)); 

function funcWithCubeAndSquare(num1, num2) {
  function square(num) {
    return num * num;
  }

  function cube(num) {
    return num * num * num;
  }

  return square(num1) + cube(num2);
}

console.log(funcWithCubeAndSquare(2, 3)); 
