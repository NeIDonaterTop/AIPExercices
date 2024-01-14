// Задание 1
function average(...nums) {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
}

console.log(average(1, 2, 3)); 
console.log(average(1, 2, 3, 4)); 
console.log(average(1, 2, 3, 4, 5)); 

// Задание 2
function unite(...arrs) {
  return arrs;
}

// Задание 3
function merge(...arrs) {
  return [].concat(...arrs);
}

let result1 = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result1); 

let result2 = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result2); 
