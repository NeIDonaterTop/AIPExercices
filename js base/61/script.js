1.
let key = 'x';

let obj = {
  [key]: 1,
  y: 2,
  z: 3
};
2.

let obj = {
  x: 1,
  y: 2,
  z: 3
};
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
let newObj = {
  [key1]: obj[key1],
  [key2]: obj[key2],
  [key3]: obj[key3]
};
console.log(newObj);
