// Задача 1
let elem = document.querySelector('#elem');

function func(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ['John', 'Smit']);
