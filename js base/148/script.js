// Работа с регистром символов
// Задание 1
let str1 = 'js';
let result1 = str1.toUpperCase();
console.log(result1);

// Задание 2
let str2 = 'JS';
let result2 = str2.toLowerCase();
console.log(result2);

// Работа с substr, substring, slice
// Задание 3
let str3 = 'я учу javascript!';
let substrResult = str3.substr(2, 3); 
let substringResult = str3.substring(2, 5); 
let sliceResult = str3.slice(2, 5); 
console.log(substrResult, substringResult, sliceResult);

// Работа с indexOf
// Задание 4
let str4 = 'abcde';
let indexOfC = str4.indexOf('c');
console.log(indexOfC);

// Задание 5
let str5 = 'some string';
let hasA = str5.indexOf('a') !== -1;
console.log(hasA);

// Задание 6
let str6 = 'abc';
let startsWithA = str6.indexOf('a') === 0;
console.log(startsWithA);

// Задание 7
let str7 = 'abc';
let endsWithA = str7.lastIndexOf('a') === str7.length - 1;
console.log(endsWithA);

// Задание 8
let str8 = 'http:
let startsWithHttp = str8.startsWith('http:
console.log(startsWithHttp);

// Задание 9
let str9 = 'index.html';
let endsWithHtml = str9.endsWith('.html');
console.log(endsWithHtml);

// Работа с startsWith, endsWith
// Задание 10
let str10 = 'http:
let startsWithHttp2 = str10.startsWith('http:
console.log(startsWithHttp2);

// Задание 11
let str11 = 'index.html';
let endsWithHtml2 = str11.endsWith('.html');
console.log(endsWithHtml2);

// Работа с split
// Задание 12
let str12 = '1-2-3-4-5';
let arr12 = str12.split('-');
console.log(arr12);

// Задание 13
let str13 = '12345';
let arr13 = str13.split('');
console.log(arr13);

// Работа с join
// Задание 14
let arr14 = [1, 2, 3, 4, 5];
let joinedStr = arr14.join('-');
console.log(joinedStr);
