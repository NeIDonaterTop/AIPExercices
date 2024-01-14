// Задание 1
let obj1 = {
  a: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  b: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  c: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
};

for (let key in obj1) {
  let subObj = obj1[key];
  
  for (let subKey in subObj) {
    console.log(subObj[subKey]);
  }
}

// Задание 2
let obj2 = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};

let sum2 = 0;

for (let key in obj2) {
  let subObj = obj2[key];
  
  for (let subKey in subObj) {
    sum2 += subObj[subKey];
  }
}

console.log(sum2);

// Задание 3
let obj3 = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  },
};

let sum3 = 0;

for (let key in obj3) {
  let subObj1 = obj3[key];
  
  for (let subKey1 in subObj1) {
    let subObj2 = subObj1[subKey1];
    
    for (let subKey2 in subObj2) {
      sum3 += subObj2[subKey2];
    }
  }
}

console.log(sum3);
