// Task 1
function getLastDayOfMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

// Task 2
let lastDayOfWeek = new Date(2025, 5, 0).getDay();
