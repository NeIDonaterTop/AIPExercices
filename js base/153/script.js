// Задание 1
function printCube(num) {
  console.log(num ** 3);
}

// Вызов функции
printCube(2); 
printCube(3); 

// Задание 2
function checkSign(num) {
  if (num > 0) {
    console.log('+++');
  } else if (num < 0) {
    console.log('---');
  } else {
    console.log('Zero');
  }
}

// Вызов функции
checkSign(5);  
checkSign(-3); 
checkSign(0);  
