// Task 1
let date1 = '2020-11-31';
let date2 = '2020-12-01';
console.log(date1 > date2 ? 'Date 1 is greater' : 'Date 2 is greater');

// Task 2
let date3 = '09-21';
let date4 = '09-23';
console.log(date3 > date4 ? 'Date 3 is greater' : 'Date 4 is greater');

// Task 3
let date5 = '08-20';

if (date5 >= '01-01' && date5 <= '03-08') {
  console.log('1 промежуток');
}

if (date5 >= '03-09' && date5 <= '06-17') {
  console.log('2 промежуток');
}

if (date5 >= '06-18' && date5 <= '12-31') {
  console.log('3 промежуток');
}
