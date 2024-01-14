let currentDate = new Date();

let date = {
  year: currentDate.getFullYear(),
  month: currentDate.getMonth() + 1, 
  day: currentDate.getDate()
};

console.log(`${date.year}-${date.month}-${date.day}`);

