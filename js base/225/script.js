// Task 1
let startDate = new Date(1988, 2, 1); 
let endDate = new Date(2000, 0, 10); 

let diffDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
console.log(diffDays);

// Task 2
let birthDate = new Date("your birth date here"); 
let currentDate = new Date();

let diffMonths = (currentDate.getFullYear() - birthDate.getFullYear()) * 12 + currentDate.getMonth() - birthDate.getMonth();
console.log(diffMonths);
