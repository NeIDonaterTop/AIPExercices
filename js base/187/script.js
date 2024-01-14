// Задание 1
function counter() {
  let count = 0;
  return function() {
    console.log(++count);
  };
}
let increment = counter();
increment(); 
increment(); 

// Задание 2
function decreaseNumber() {
  let num = 10;
  return function() {
    console.log(num--);
  };
}
let decrease = decreaseNumber();
decrease(); 
decrease(); 

// Задание 3
function countdown() {
  let num = 3;
  return function() {
    if (num > 0) {
      console.log(num--);
    } else {
      console.log('Countdown is over');
    }
  };
}
let count = countdown();
count(); 
count(); 
count(); 
count(); 

function func() {
  let num = 0;
  return function() {
    console.log(num);
    num++;
  };
}
func()(); 
func()(); 

// Задание 4
let counter = 0;
function test() {
  return function() {
    console.log(counter);
    counter++;
  };
}
let func = test;
let func1 = func();
let func2 = func();
func1(); 
func2(); 
func1(); 
func2(); 

// Задание 5
function test() {
  let counter = 0;
  return function() {
    return function() {
      console.log(counter);
      counter++;
    };
  };
}
let func = test()();
let func1 = func;
let func2 = func;
func1(); 
func2(); 
func1(); 
func2(); 

// Задание 6
function test() {
  let counter = 0;
  return function() {
    return function() {
      console.log(counter);
      counter++;
    };
  };
}
let func = test();
let func1 = func();
let func2 = func();
func1(); 
func2(); 
func1(); 
func2(); 
