
// №1
let elementById = document.getElementById('elem');
elementById.textContent = 'Text set by getElementById';

// №2
let liElements = document.getElementsByTagName('li');
for (let li of liElements) {
    li.style.color = 'red';
}

// №3
let wwwElements = document.getElementsByClassName('www');
for (let www of wwwElements) {
    www.style.color = 'red';
}
