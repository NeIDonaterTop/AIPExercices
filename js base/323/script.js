// Задача 1
let table1 = document.querySelector('#table');

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  table1.appendChild(tr);
}

// Задача 2
let table2 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  table2.appendChild(tr);
}

// Задача 3
let table3 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = 'x';
    tr.appendChild(td);
  }

  table3.appendChild(tr);
}

// Задача 4
let widthInput = document.getElementById('width');
let heightInput = document.getElementById('height');
let table4 = document.querySelector('#table');

let width = parseInt(widthInput.value);
let height = parseInt(heightInput.value);

for (let i = 0; i < height; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < width; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  table4.appendChild(tr);
}
