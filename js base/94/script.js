let num = 73;

if (num >= 10 && num <= 99) {
    let digitSum = Math.floor(num / 10) + (num % 10);

    if (digitSum <= 9) {
        console.log('Сумма цифр однозначна');
    } else {
        console.log('Сумма цифр двухзначна');
    }
} else {
    console.log('Число не попадает в диапазон от 10 до 99');
}
