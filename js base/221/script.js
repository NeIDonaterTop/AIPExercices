// zadanie 1
let date = new Date();
console.log(date.getDay()); 

// zadanie 2
let isWeekend = date.getDay() === 0 || date.getDay() === 6;
console.log(isWeekend ? 'выходной' : 'рабочий день');

// zadanie 3
let daysUntilSunday = 7 - date.getDay();
console.log(`До ближайшего воскресенья осталось ${daysUntilSunday} дней`);
