// Задание 1
function func(num) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    
    if (sum >= 10) {
      return i + 1; 
    }
  }
}

let res = func([1, 2, 3, 4, 5]);
console.log(res);
// Выведет 5. Сложение элементов [1, 2, 3, 4, 5] до первого превышения 10.

// Задание 2
function countIterations(num) {
  let count = 0;

  while (num >= 10) {
    num /= 2;
    count++;
  }

  return count;
}

console.log(countIterations(64));
// Выведет 3. 64 / 2 / 2 / 2 = 4.
