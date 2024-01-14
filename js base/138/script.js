// Задание 1
let arr1 = [];

for (let i = 0, k = 1; i < 4; i++) {
  arr1[i] = [];
  
  for (let j = 0; j < 2; j++) {
    arr1[i].push(k);
    k++;
  }
}

console.log(arr1);

// Задание 2
let arr2 = [];

for (let i = 0, k = 2; i < 4; i++) {
  arr2[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr2[i].push(k);
    k += 2;
  }
}

console.log(arr2);

// Задание 3
let arr3 = [];

for (let i = 0; i < 2; i++) {
  arr3[i] = [];
  
  for (let j = 0, k = 1; j < 2; j++) {
    arr3[i][j] = [];
    
    for (let l = 0; l < 2; l++) {
      arr3[i][j].push(k);
      k++;
    }
  }
}

console.log(arr3);

// Задание 4
let arr4 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr4[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr4[i][j] = k;
    k++;
  }
}

console.log(arr4);

// Задание 5
let arr5 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr5[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr5[i][j] = k;
  }
}

console.log(arr5);

// Задание 6
let arr6 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr6[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr6[i][j] = k;
    k--;
  }
}

console.log(arr6);

// Задание 7
let arr7 = [];

for (let i = 0, k; i < 3; i++) {
  arr7[i] = [];
  k = i * 3 + 1;
  
  for (let j = 0; j < 3; j++) {
    arr7[i][j] = k++;
  }
}

console.log(arr7);

// Задание 8
let arr8 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr8[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr8[i][j] = k++;
  }
}

console.log(arr8);

// Задание 9
let arr9 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr9[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr9[i][j] = k;
    k++;
  }
}

console.log(arr9);

// Задание 10
let arr10 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr10[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr10[i][j] = k++;
  }
}

console.log(arr10);

// Задание 11
let arr11 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr11[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr11[i][j] = ++k;
  }
}

console.log(arr11);

// Задание 12
let arr12 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr12[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr12[i][j] = k++;
  }
}

console.log(arr12);

// Задание 13
let arr13 = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr13[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr13[i][j] = k;
  }
}

console.log(arr13);
