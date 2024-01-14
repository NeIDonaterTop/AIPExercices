// Задача 1
let ul = document.getElementById('elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  let li = document.createElement('li');
  li.textContent = elem;
  ul.appendChild(li);
}

// Задача 2
let lis = document.querySelectorAll('#elem li');
for (let li of lis) {
  li.addEventListener('click', function () {
    alert(this.textContent);
  });
}

// Задача 3
for (let li of lis) {
  li.addEventListener('click', function () {
    this.textContent += '!';
  });
}

// Задача 4
for (let li of lis) {
  let clicked = false;
  li.addEventListener('click', function () {
    if (!clicked) {
      this.textContent += '!';
      clicked = true;
    }
  });
}
