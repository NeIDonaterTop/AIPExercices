// Задача 1
let arr1 = [1, 2, 3, 4, 0, 5];

for (let elem1 of arr1) {
    console.log(elem1);
    if (elem1 === 0) {
        break;
    }
}
// Задача 2
let arr2 = [1, 2, 3, 4, -5, 6, 7];
let sum2 = 0;

for (let elem2 of arr2) {
    if (elem2 < 0) {
        break;     }
    sum2 += elem2;
}

console.log(sum2);
// Задача 3
let arr3 = [1, 2, 3, 4, 3, 5];
let position3 = -1;

for (let i3 = 0; i3 < arr3.length; i3++) {
    if (arr3[i3] === 3) {
        position3 = i3;
        break; 
    }
}

console.log(position3);
// Задача 4
let sum4 = 0;
let i4 = 1;

while (sum4 <= 100) {
    sum4 += i4;
    i4++;
}

console.log(i4 - 1);
