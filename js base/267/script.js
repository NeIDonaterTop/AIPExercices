// Шаг 1: Получение абзацев в виде массива и вывод в консоль
let elems = document.querySelectorAll('li');
console.log(elems);

// Шаг 2: Перебор абзацев и вывод каждого в консоль
for (let elem of elems) {
  console.log(elem);
}

// Шаг 3: Вывод текстов абзацев в консоль
for (let elem of elems) {
  console.log(elem.textContent);
}

// Шаг 4: Вывод текстов абзацев, чье число делится на 3
for (let elem of elems) {
  let year = +elem.textContent;
  if (year % 3 === 0) {
    console.log(year);
  }
}

// Шаг 5: Суммирование чисел, которые делятся на 3
let sum = 0;
for (let elem of elems) {
  let year = +elem.textContent;
  if (year % 3 === 0) {
    sum += year;
  }
}

console.log(sum);
