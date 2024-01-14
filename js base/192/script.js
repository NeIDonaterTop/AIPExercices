function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

let result1 = each([1, 2, 3, 4, 5], function(num) {
  return num * 2;
});
console.log(result1);

let result2 = each(["apple", "banana", "cherry"], function(str) {
  return str.split('').reverse().join('');
});
console.log(result2);

let result3 = each(["apple", "banana", "cherry"], function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
console.log(result3);

function cube(num) {
  return num ** 3;
}

let result4 = each([1, 2, 3, 4, 5], cube);
console.log(result4);
