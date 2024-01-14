let elem = document.getElementById('elem');

function func(name, surname) {
  console.log(this.value + ', ' + name + ' ' + surname);
}

func = func.bind(elem);

func('John', 'Smit'); 
func('Eric', 'Luis'); 
