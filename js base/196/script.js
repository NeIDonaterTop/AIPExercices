// Задание 1
function printPrimitives(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      printPrimitives(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

const obj1 = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } }
};

printPrimitives(obj1);

// Задание 2
function flattenArray(arr) {
  return arr.reduce((result, elem) => {
    return result.concat(Array.isArray(elem) ? flattenArray(elem) : elem);
  }, []);
}

const arr2 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
console.log(flattenArray(arr2));

// Задание 3
function getSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += getSum(obj[key]);
    } else {
      sum += obj[key];
    }
  }

  return sum;
}

const obj3 = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } }
};

console.log(getSum(obj3));

// Задание 4
function flattenStrings(arr) {
  return arr.reduce((result, elem) => {
    return result + (Array.isArray(elem) ? flattenStrings(elem) : elem);
  }, '');
}

const arr4 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
console.log(flattenStrings(arr4));

// Задание 5
function squareNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      squareNumbers(arr[i]);
    } else if (typeof arr[i] === 'number') {
      arr[i] = arr[i] ** 2;
    }
  }

  return arr;
}

const arr5 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareNumbers(arr5));
