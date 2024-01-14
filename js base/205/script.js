// Задание 1
function printArgs(...args) {
  console.log(args);
}

printArgs(1, 'a', true); 

// Задание 2
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 

// Задание 3
function concatStrings(separator, ...strings) {
  return strings.join(separator);
}

console.log(concatStrings('-', 'a', 'b', 'c')); 
