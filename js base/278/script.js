// Task 1
let input1 = document.querySelector('#input1');

input1.addEventListener('input', function() {
  if (this.value.length === 5) {
    console.log('Длина текста достигла 5 символов');
  }
});

// Task 2
let input2 = document.querySelector('#input2');
let paragraph2 = document.querySelector('#paragraph2');
let maxLength = 5;

input2.addEventListener('input', function() {
  let remainingChars = maxLength - this.value.length;
  if (remainingChars >= 0) {
    paragraph2.textContent = `Осталось ввести ${remainingChars} символов.`;
  } else {
    paragraph2.textContent = `Превышение на ${Math.abs(remainingChars)} символов.`;
  }
});
// Task 1
let select1 = document.querySelector('#select1');
let paragraph1 = document.querySelector('#paragraph1');
let button1 = document.querySelector('#button1');

button1.addEventListener('click', function() {
  paragraph1.textContent = select1.value;
});

// Task 2
let select2 = document.querySelector('#select2');
let output2 = document.querySelector('#output2');

select2.addEventListener('change', function() {
  let year = parseInt(this.value);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    output2.textContent = `Год ${year} високосный.`;
  } else {
    output2.textContent = `Год ${year} не високосный.`;
  }
});

// Task 3
let select3 = document.querySelector('#select3');
let output3 = document.querySelector('#output3');

select3.addEventListener('change', function() {
  let dayNumber = parseInt(this.value);
  if (dayNumber >= 1 && dayNumber <= 5) {
    output3.textContent = 'Это рабочий день.';
  } else {
    output3.textContent = 'Это выходной день.';
  }
});
