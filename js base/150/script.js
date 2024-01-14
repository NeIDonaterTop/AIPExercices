// Задание 1
let str1 = 'london';
let result1 = str1.slice(0, 1).toUpperCase() + str1.slice(1);
console.log(result1);

// Задание 2
let str2 = 'london';
let result2 = str2.slice(0, 2).toUpperCase() + str2.slice(2);
console.log(result2);

// Задание 3
let str3 = 'London';
let result3 = str3.slice(0, 1).toLowerCase() + str3.slice(1);
console.log(result3);

// Слова в строке
// Задание 4
let str4 = 'word1 word2 word3';
let wordsArr = str4.split(' ');

for (let i = 0; i < wordsArr.length; i++) {
  wordsArr[i] = wordsArr[i].slice(0, 1).toUpperCase() + wordsArr[i].slice(1);
}

let result4 = wordsArr.join(' ');
console.log(result4);

// Задание 5
let str5 = 'var_test_text';
let wordsArr5 = str5.split('_');

for (let i = 0; i < wordsArr5.length; i++) {
  wordsArr5[i] = wordsArr5[i].slice(0, 1).toUpperCase() + wordsArr5[i].slice(1);
}

let result5 = wordsArr5.join('');
console.log(result5);

// Задание 6
let str6 = 'var_test_text';
let wordsArr6 = str6.split('_');

for (let i = 0; i < wordsArr6.length; i++) {
  wordsArr6[i] = wordsArr6[i].slice(0, 1).toUpperCase() + wordsArr6[i].slice(1);
}

let result6 = wordsArr6.join('');
result6 = result6.slice(0, 1).toLowerCase() + result6.slice(1);
console.log(result6);

// Переворот строки
// Задание 7
let str7 = '12345';
let result7 = str7.split('').reverse().join('');
console.log(result7);

// Задание 8
let str8 = 'This is a test string';
let reversedWordsArr = str8.split(' ').reverse();
let result8 = reversedWordsArr.join(' ');
console.log(result8);
