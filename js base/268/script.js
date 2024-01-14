// Task 1
let elems1 = document.querySelectorAll('p');
for (let elem of elems1) {
    elem.textContent += '!';
}

// Task 2
let elems2 = document.querySelectorAll('p');
for (let elem of elems2) {
    elem.addEventListener('click', function () {
        this.textContent = Number(this.textContent) + 1;
    });
}

// Task 3
let button3 = document.querySelector('button');
let elem3 = document.querySelector('p');
button3.addEventListener('click', function () {
    elem3.innerHTML = '<b>elem.innerHTML</b>';
});

// Task 4
let button4 = document.querySelector('button');
let elems4 = document.querySelectorAll('p');
button4.addEventListener('click', function () {
    let sum4 = 0;
    for (let elem4 of elems4) {
        sum4 += Number(elem4.textContent);
    }
    console.log(sum4);
});

// Task 5
let elems5 = document.querySelectorAll('p');
for (let elem5 of elems5) {
    elem5.addEventListener('click', function () {
        this.textContent += '!';
    });
}

// Task 6
let button6 = document.querySelector('button');
let elems6 = document.querySelectorAll('p');
button6.addEventListener('click', function () {
    for (let elem6 of elems6) {
        elem6.innerHTML = '<b>' + elem6.innerHTML + '</b>';
    }
});

// Task 7
let button7 = document.querySelector('button');
let elems7 = document.querySelectorAll('p');
let sum7 = 0;
for (let elem7 of elems7) {
    sum7 = Number(elem7.textContent) + 1;
    button7.addEventListener('click', function () {
        console.log(sum7);
    });
}

// Task 8
let button8 = document.querySelector('button');
let elems8 = document.querySelectorAll('input');
let sum8 = 0;
for (let elem8 of elems8) {
    sum8 += Number(elem8.value);
}
button8.addEventListener('click', function () {
    console.log(sum8);
});

// Task 9
let btn9 = document.querySelector('#btn');
let inp19 = document.querySelector('#inp1');
let inp29 = document.querySelector('#inp2');
let inp39 = document.querySelector('#inp3');
btn9.addEventListener('click', function () {
    inp39.value = Number(inp19.value) + Number(inp29.value);
});

// Task 10
let btn10 = document.querySelector('#btn');
let res10 = document.querySelector('#res');
let inp110 = document.querySelector('#inp1');
let inp210 = document.querySelector('#inp2');
btn10.addEventListener('click', function () {
    res10.textContent = Number(inp110.value) + Number(inp210.value);
});

// Task 11
let inputs11 = document.querySelectorAll('input');
let button11 = document.querySelector('#btn');
button11.addEventListener('click', function () {
    for (let input11 of inputs11) {
        if (input11.value === input11.dataset.text) {
            input11.classList.add('right');
        } else {
            input11.classList.add('wrong');
        }
    }
});

// Task 12
let inputs12 = document.querySelectorAll('input');
let button12 = document.querySelector('#btn');
let texts12 = ['text1', 'text2', 'text3'];
button12.addEventListener('click', function () {
    for (let input12 of inputs12) {
        for (let text12 of texts12) {
            if (input12.value === text12) {
                input12.classList.add('right');
            } else {
                input12.classList.add('wrong');
            }
        }
    }
});

// Task 13
let inputs13 = document.querySelectorAll('input');
let btn13 = document.querySelector('#btn');
let sum13 = 0;
btn13.addEventListener('click', function () {
    for (let input13 of inputs13) {
        sum13 += Number(input13.value);
    }
    console.log(sum13);
});

// Task 14
let btn14 = document.querySelector('#btn');
let inp114 = document.querySelector('#inp1');
let inp214 = document.querySelector('#inp2');
let inp314 = document.querySelector('#inp3');
let sum14 = Number(inp114.value) + Number(inp214.value);
btn14.addEventListener('click', function () {
    inp314.value = sum14;
});

// Task 15
let inp15 = document.querySelector('#inp');
inp15.addEventListener('blur', function () {
    let digits15 = Array.from(inp15.value).map(Number);
    let sum15 = digits15.reduce((acc, digit) => acc + digit, 0);
    console.log(sum15);
});
