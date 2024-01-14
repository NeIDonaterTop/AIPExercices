// Задание 1
function areAllEven(arr) {
  for (let elem of arr) {
    if (elem % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(areAllEven([2, 4, 6])); 
console.log(areAllEven([2, 3, 6])); 

// Задание 2
function areAllDigitsOdd(num) {
  const numStr = num.toString();
  for (let digit of numStr) {
    if (parseInt(digit) % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(areAllDigitsOdd(135)); 
console.log(areAllDigitsOdd(123)); 

// Задание 3
function hasAdjacentDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasAdjacentDuplicates([1, 2, 2, 3])); 
console.log(hasAdjacentDuplicates([1, 2, 3, 4])); 
