
// №1
let parent = document.querySelector('#parent');
let elems1 = parent.querySelectorAll('.www');
let elems2 = parent.querySelectorAll('.ggg');


// №2
let divs = document.querySelectorAll('[data-num]');
divs.forEach((div) => {
    div.addEventListener('click', function() {
        this.innerHTML += this.getAttribute('data-num');
    });
});

// №3
let clickCount = 0;
let button = document.querySelector('button');

button.addEventListener('click', function() {
    clickCount++;
    this.setAttribute('data-click-count', clickCount);

    if (clickCount % 2 === 0) {
        alert(`Click count: ${clickCount}`);
    }
});

// №4
let inputElem = document.querySelector('#elem');

inputElem.addEventListener('blur', function() {
    const minLength = parseInt(this.getAttribute('data-length'));
    if (this.value.length !== minLength) {
        alert(`Length should be ${minLength} characters.`);
    }
});

// №5
let inputElem = document.querySelector('#elem');

inputElem.addEventListener('blur', function() {
    const min = parseInt(this.getAttribute('data-min'));
    const max = parseInt(this.getAttribute('data-max'));

    const length = this.value.length;

    if (length < min || length > max) {
        alert(`Length should be between ${min} and ${max} characters.`);
    }
});

// №6
let elem = document.querySelector('#elem');
elem.dataset.productPrice = 1000;
elem.dataset.productAmount = 5;

elem.addEventListener('click', function() {
    const price = parseInt(this.dataset.productPrice);
    const amount = parseInt(this.dataset.productAmount);
    const totalPrice = price * amount;

    this.innerHTML += `<br>Total Price: ${totalPrice}`;
});

// №7
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('data-num', index + 1);
});
