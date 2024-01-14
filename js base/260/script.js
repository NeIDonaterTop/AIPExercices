
function styleDiv() {
    // №1
    let myDiv = document.getElementById('myDiv');
    myDiv.style.width = '200px';
    myDiv.style.height = '100px';
    myDiv.style.border = '2px solid black';

    // №2
    let listItems = document.querySelectorAll('li');
    for (let item of listItems) {
        item.style.fontSize = '20px';
        item.style.borderTop = '1px solid gray';
        item.style.backgroundColor = '#f2f2f2';
    }

    // №3
    let ul = document.querySelector('ul');
    let listItemFloat = ul.querySelectorAll('li');
    for (let item of listItemFloat) {
        item.style.float = 'left';
    }
}
