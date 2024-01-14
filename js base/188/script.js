// Задание 1
let counter = (function() {
  let count = 1;
  return function() {
    console.log(count);
    count++;
  };
})();

counter(); 
counter(); 
counter(); 
counter(); 
counter(); 

// Задание 2
let cyclicCounter = (function() {
  let count = 1;
  return function() {
    console.log(count);
    count = (count % 5) + 1;
  };
})();

cyclicCounter(); 
cyclicCounter(); 
cyclicCounter(); 
cyclicCounter(); 
cyclicCounter(); 
cyclicCounter(); 
cyclicCounter(); 

// Сравнение с предыдущим способом
function test() {
  let num = 1;
  return function() {
    console.log(num);
    num++;
  };
}

let func = test();

func(); 
func(); 
func(); 
func(); 
func(); 
