// Задача 1
let num = 12345;
let lastDigit = String(num).slice(-1);

if (lastDigit == 0) {
    console.log('Последняя цифра равна нулю');
} else {
    console.log('Последняя цифра не равна нулю');
}

// Задача 2
let num = 12345;
let lastDigit = String(num).slice(-1);

if (lastDigit % 2 === 0) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}
