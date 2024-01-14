let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day, ...time] = arr;

console.log(year);  	
console.log(month); 	
console.log(day);   	
console.log(time);  	
2.
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...info] = arr;

console.log(name);   	
console.log(surname); 	
console.log(info);    	
