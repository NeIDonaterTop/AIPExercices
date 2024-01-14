// Задача 1
let month = 8;

if (month >= 1 && month <= 12) {
    if (month >= 3 && month <= 5) {
        console.log('Весна');
    } else if (month >= 6 && month <= 8) {
        console.log('Лето');
    } else if (month >= 9 && month <= 11) {
        console.log('Осень');
    } else {
        console.log('Зима');
    }
} else {
    console.log('Неверное значение месяца');
}

// Задача 2
let str = 'abcde';

if (str[0] === 'a') {
    console.log('да');
} else {
    console.log('нет');
}

// Задача 3
let num = 12345;

if (String(num)[0] === '1' || String(num)[0] === '2' || String(num)[0] === '3') {
    console.log('да');
} else {
    console.log('нет');
}

// Задача 4
let number = 345;
let digitSum = Number(String(number)[0]) + Number(String(number)[1]) + Number(String(number)[2]);

console.log('Сумма цифр:', digitSum);

// Задача 5
let sixDigitNumber = 123789;

let firstHalfSum = Number(String(sixDigitNumber)[0]) + Number(String(sixDigitNumber)[1]) + Number(String(sixDigitNumber)[2]);
let secondHalfSum = Number(String(sixDigitNumber)[3]) + Number(String(sixDigitNumber)[4]) + Number(String(sixDigitNumber)[5]);

if (firstHalfSum === secondHalfSum) {
    console.log('да');
} else {
    console.log('нет');
}
