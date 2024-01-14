// Задача 1
let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

let table = document.getElementById('table');

for (let employee of employees) {
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.textContent = employee.name;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = employee.age;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = employee.salary;
  tr.appendChild(td3);

  table.appendChild(tr);
}

// Задача 2
table.addEventListener('click', function (event) {
  if (event.target.tagName === 'TD' && event.target.cellIndex === 1) {
    let age = parseInt(event.target.textContent);
    event.target.textContent = age + 1;
  }
});

// Задача 3
table.addEventListener('click', function (event) {
  if (event.target.tagName === 'TD' && event.target.cellIndex === 2) {
    let salary = parseFloat(event.target.textContent);
    event.target.textContent = (salary * 1.1).toFixed(2);
  }
});
