// Задание 1
let data1 = {
  1: ['data11', 'data12', 'data13'],
  2: ['data21', 'data22', 'data23'],
  3: ['data31', 'data32', 'data33'],
  4: ['data41', 'data42', 'data43'],
};

for (let key in data1) {
  for (let value of data1[key]) {
    console.log(value);
  }
}

// Задание 2
let data2 = [
  { 1: 'data11', 2: 'data12', 3: 'data13' },
  { 1: 'data21', 2: 'data22', 3: 'data33' },
  { 1: 'data31', 2: 'data32', 3: 'data33' },
];

for (let obj of data2) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

// Задание 3
let data3 = [
  {
    1: ['data111', 'data112', 'data113'],
    2: ['data121', 'data122', 'data123'],
  },
  {
    1: ['data211', 'data212', 'data213'],
    2: ['data221', 'data222', 'data223'],
  },
  {
    1: ['data411', 'data412', 'data413'],
    2: ['data421', 'data422', 'data423'],
  },
];

for (let obj of data3) {
  for (let key in obj) {
    for (let value of obj[key]) {
      console.log(value);
    }
  }
}
