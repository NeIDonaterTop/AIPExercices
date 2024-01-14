// Task 1
let startDate = new Date(2000, 8, 1); 
let endDate = new Date(2010, 1, 15); 

let diffMilliseconds = endDate - startDate;
console.log(diffMilliseconds);

// Task 2
let diffDays = diffMilliseconds / (1000 * 60 * 60 * 24);
console.log(diffDays);

// Task 3
let diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
console.log(diffMonths);

// Task 4
let diffYears = endDate.getFullYear() - startDate.getFullYear();
console.log(diffYears);
