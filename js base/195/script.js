// Задание 1
function printArrayElements(arr) {
  console.log(arr.shift());

  if (arr.length !== 0) {
    printArrayElements(arr);
  }
}

printArrayElements([1, 2, 3, 4, 5]);

// Задание 2
function getSquareSum(arr) {
  let sum = arr.shift() ** 2;

  if (arr.length !== 0) {
    sum += getSquareSum(arr);
  }

  return sum;
}

console.log(getSquareSum([1, 2, 3, 4, 5]));
