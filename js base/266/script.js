// script.js

// №1
let elem = document.querySelector('#elem');
console.log(elem.lastChild);              // комментарий
console.log(elem.lastElementChild);        // тег span

// №2
console.log(elem.nextSibling);             // текст "text"
console.log(elem.nextElementSibling);       // null, так как нет следующего элемента

// №3
console.log(elem.previousSibling);          // текст "text"
console.log(elem.previousElementSibling);    // null, так как нет предыдущего элемента

// №4
let container = document.querySelector('#container');

for (let node of container.childNodes) {
    console.log(node);
}

// №5
for (let node of container.childNodes) {
    console.log(node.nodeName);
}

// №6
for (let node of container.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node);
    }
}

// №7
for (let node of container.childNodes) {
    console.log(node.textContent);
}

// №8
for (let node of container.childNodes) {
    if (node.nodeType === 8 || node.nodeType === 3) {
        console.log(node.textContent);
    }
}

// №9
for (let node of container.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node.textContent);
    }
}

// №10
for (let node of container.childNodes) {
    node.textContent += ` [Type: ${node.nodeType}]`;
    console.log(node.textContent);
}
