
// Задание 1
let employees1 = [
  { name: 'name1', salary: 300 },
  { name: 'name2', salary: 400 },
  { name: 'name3', salary: 500 },
];

for (let employee of employees1) {
  console.log(employee.name + ' - ' + employee.salary);
}

// Задание 2
let employees2 = [
  { name: 'name1', salary: 300 },
  { name: 'name2', salary: 400 },
  { name: 'name3', salary: 500 },
];

let totalSalary = 0;

for (let employee of employees2) {
  totalSalary += employee.salary;
}

console.log('Сумма зарплат: ' + totalSalary);

// Задание 3
let employees3 = [
  { name: 'name1', salary: 300, age: 28 },
  { name: 'name2', salary: 400, age: 29 },
  { name: 'name3', salary: 500, age: 30 },
  { name: 'name4', salary: 600, age: 31 },
  { name: 'name5', salary: 700, age: 32 },
];

let totalSalaryOver30 = 0;

for (let employee of employees3) {
  if (employee.age >= 30) {
    totalSalaryOver30 += employee.salary;
  }
}

console.log('Сумма зарплат работников старше или равных 30 лет: ' + totalSalaryOver30);
