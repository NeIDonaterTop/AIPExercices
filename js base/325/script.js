// Задача 1
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table1 = document.querySelector('#table');

for (let subArr of arr1) {
  let tr = document.createElement('tr');

  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem;
    tr.appendChild(td);
  }

  table1.appendChild(tr);
}

// Задача 2
let arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table2 = document.querySelector('#table');

for (let subArr of arr2) {
  let tr = document.createElement('tr');

  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem * elem;
    tr.appendChild(td);
  }

  table2.appendChild(tr);
}
