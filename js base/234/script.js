// Task 1
let currentDate = new Date();
let noonToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0, 0);

console.log(currentDate > noonToday); 

// Task 2
let currentDate2 = new Date();
let middleOfMonth = new Date(currentDate2.getFullYear(), currentDate2.getMonth(), 15);

console.log(currentDate2 > middleOfMonth); 
