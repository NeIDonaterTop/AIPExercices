let arr = [1, 2, 3];

if (arr.length === 3) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    console.log('Сумма элементов массива: ' + sum);
}
