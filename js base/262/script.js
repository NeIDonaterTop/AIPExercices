// №1
let firstChild = document.querySelector('#elem').firstElementChild;
firstChild.style.color = 'red';

// №2
let lastChild = document.querySelector('#elem').lastElementChild;
lastChild.style.color = 'red';

// №3
let allChildren = document.querySelector('#elem').children;
for (let child of allChildren) {
    child.textContent += '!';
}

// №4
let parent = document.querySelector('#elem li#elem').parentElement;
parent.style.border = '1px solid red';

// №5
let grandparent = document.querySelector('#elem li#elem').parentElement.parentElement;
grandparent.style.border = '1px solid red';

// №6
let closestParent = document.querySelector('#elem').closest('div');
console.log(closestParent);

// №7
let closestParentWithClass = document.querySelector('#elem').closest('.www');
console.log(closestParentWithClass);

// №8
let aboveSibling = document.querySelector('#elem').previousElementSibling;
aboveSibling.textContent += '!';

// №9
let belowSibling = document.querySelector('#elem').nextElementSibling;
belowSibling.textContent += '!';

// №10
let doubleBelowSibling = document.querySelector('#elem').nextElementSibling.nextElementSibling;
doubleBelowSibling.textContent += '!';

// №11
let elem = document.querySelector('#elem');
let aboveText = elem.previousElementSibling.textContent;
let belowText = elem.nextElementSibling.textContent;
elem.previousElementSibling.textContent = belowText;
elem.nextElementSibling.textContent = aboveText;
