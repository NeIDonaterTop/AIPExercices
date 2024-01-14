// script.js

// Task 1
let input1 = document.getElementById('input1');
let output1 = document.getElementById('output1');

input1.addEventListener('blur', function() {
    output1.textContent = 'Result: ' + input1.value;
});

// Task 2
function calculateSum() {
    let input2_1 = document.getElementById('input2_1');
    let input2_2 = document.getElementById('input2_2');
    let input2_3 = document.getElementById('input2_3');
    let output2 = document.getElementById('output2');

    let sum = parseFloat(input2_1.value) + parseFloat(input2_2.value) + parseFloat(input2_3.value);
    output2.textContent = 'Result: ' + sum;
}

// Task 3
let input3 = document.getElementById('input3');
let output3 = document.getElementById('output3');

input3.addEventListener('blur', function() {
    let digits = Array.from(input3.value).map(Number);
    let sum = digits.reduce((acc, digit) => acc + digit, 0);
    output3.textContent = 'Sum of digits: ' + sum;
});

// Task 4
let input4 = document.getElementById('input4');
let output4 = document.getElementById('output4');

input4.addEventListener('blur', function() {
    let numbers = input4.value.split(',').map(Number);
    let average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    output4.textContent = 'Average: ' + average;
});

// Task 5
let input5 = document.getElementById('input5');
let output5_1 = document.getElementById('output5_1');
let output5_2 = document.getElementById('output5_2');
let output5_3 = document.getElementById('output5_3');

input5.addEventListener('blur', function() {
    let parts = input5.value.split(' ');
    output5_1.value = parts[0] || '';
    output5_2.value = parts[1] || '';
    output5_3.value = parts[2] || '';
});

// Task 6
let input6 = document.getElementById('input6');

input6.addEventListener('blur', function() {
    let fullName = input6.value.toLowerCase().split(' ');
    fullName = fullName.map(name => name.charAt(0).toUpperCase() + name.slice(1));
    input6.value = fullName.join(' ');
});

// Task 7
let input7 = document.getElementById('input7');
let button7 = document.querySelector('button');

function countWords() {
    let words = input7.value.split(/\s+/).filter(word => word.length > 0);
    alert('Number of words: ' + words.length);
}

button7.addEventListener('click', countWords);

// Task 8
let input8 = document.getElementById('input8');

function formatDate() {
    let dateParts = input8.value.split('.');
    if (dateParts.length === 3) {
        let formattedDate = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
        input8.value = formattedDate;
    }
}

// Task 9
let input9 = document.getElementById('input9');
let button9 = document.querySelector('button');

function checkPalindrome() {
    let word = input9.value.toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        alert('The word is a palindrome!');
    } else {
        alert('The word is not a palindrome.');
    }
}

button9.addEventListener('click', checkPalindrome);

// Task 10
let input10 = document.getElementById('input10');

function checkDigit() {
    let number = input10.value;
    if (number.includes('3')) {
        alert('The number contains the digit 3.');
    } else {
        alert('The number does not contain the digit 3.');
    }
}

input10.addEventListener('blur', checkDigit);

// Task 11
function addParagraphNumbers() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent += ' ' + (index + 1);
    });
}

// Task 12
function addLinkHref() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.textContent += ' (' + link.href + ')';
    });
}

// Task 13
function addArrow() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.href.startsWith('http://')) {
            link.textContent += ' →';
        }
    });
}

// Task 14
function squareNumbers() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        let number = parseInt(paragraph.textContent);
        if (!isNaN(number)) {
            paragraph.textContent = Math.pow(number, 2);
        }
    });
}

// Task 15
function getDayOfWeek() {
    let input15 = document.getElementById('input15');
    let dateParts = input15.value.split('.');
    if (dateParts.length === 3) {
        let date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        alert('Day of the week: ' + daysOfWeek[date.getDay()]);
    }
}

// Task 16
function incrementCounter() {
    let counterInput = document.getElementById('counterInput');
    let currentValue = parseInt(counterInput.value);
    counterInput.value = isNaN(currentValue) ? 1 : currentValue + 1;
}

function decrementCounter() {
    let counterInput = document.getElementById('counterInput');
    let currentValue = parseInt(counterInput.value);
    counterInput.value = isNaN(currentValue) || currentValue <= 0 ? 0 : currentValue - 1;
}

// Task 17
let totalClicks17 = 0;

function incrementCounter17() {
    totalClicks17++;
    document.getElementById('output17').textContent = 'Total Clicks: ' + totalClicks17;
}

// Task 18
function trimText() {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.textContent = div.textContent.slice(0, 10) + '...';
    });
}

// Task 19
function validateNumber() {
    let input19 = document.getElementById('input19');
    let number = parseInt(input19.value);
    if (!isNaN(number) && number >= 1 && number <= 100) {
        input19.style.color = 'green';
    } else {
        input19.style.color = 'red';
    }
}

// Task 20
function generateRandomString() {
    let input20 = document.getElementById('input20');
    let randomString = Math.random().toString(36).substring(2, 10);
    input20.value = randomString;
}