// Task 1
let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let secondsPassed = Math.floor((now - startOfDay) / 1000);
console.log(secondsPassed);

// Task 2
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - 1;
let secondsRemaining = Math.floor((endOfDay - now) / 1000);
console.log(secondsRemaining);

// Task 3
let newYear = new Date(now.getFullYear() + 1, 0, 1);
let daysRemaining = Math.floor((newYear - now) / (1000 * 60 * 60 * 24));
console.log(daysRemaining);

// Task 4
let friday13Count = 0;
for (let month = 0; month < 12; month++) {
  let date = new Date(now.getFullYear(), month, 13);
  if (date.getDay() === 5) {
    friday13Count++;
  }
}
console.log(friday13Count);

// Task 5
let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
let previousYear = threeMonthsAgo.getFullYear();
console.log(previousYear);

// Task 6
let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
let dayOfWeekLastDay = lastDayOfMonth.getDay();
console.log(dayOfWeekLastDay);

// Task 7
let isLeapYear = (now.getFullYear() % 4 === 0 && now.getFullYear() % 100 !== 0) || (now.getFullYear() % 400 === 0);
console.log(isLeapYear);

// Task 8
let previousLeapYear = now.getFullYear() - (now.getFullYear() % 4);
if (now.getFullYear() % 4 !== 0) {
  previousLeapYear -= 4;
}
console.log(previousLeapYear);

// Task 9
let nextLeapYear = now.getFullYear() + (4 - (now.getFullYear() % 4));
if (now.getFullYear() % 4 !== 0) {
  nextLeapYear += 4;
}
console.log(nextLeapYear);
