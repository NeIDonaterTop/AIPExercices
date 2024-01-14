// Задача 1
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
}
// Задача 2
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(Number(str[0]) + Number(str[1]));
}
// Задача 3
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (str[0] === '1') {
        console.log(i);
    }
}
// Задача 4
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (Number(str[0]) + Number(str[1]) === 5) {
        console.log(i);
    }
}
