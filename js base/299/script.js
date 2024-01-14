// Задача 1
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

function func() {
  console.log(this.value);
}

func.call(elem1);
func.call(elem2);
func.call(elem3);
// Задача 2
<input id="elem" value="hello">
let elem = document.querySelector('#elem');

function func(surname, name) {
  console.log(this.value + ', ' + name + ' ' + surname);
}

func.call(elem, 'John', 'Smit');
