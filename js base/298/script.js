// Задача 1
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
  console.log(this.value); 
  
  let self = this;
  
  function child() {
    console.log(self.value); 
  }
  child();
}
// Задача 2
<input id="elem" value="3">
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func); 

function func() {
  alert(square.call(this)); 
  
  function square() {
    return this.value * this.value;
  }
}
// Задача 3
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
  child(this);

  function child(param) {
    console.log(param.value); 
  }
}
// Задача 4
// Третье решение
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
  console.log(this.value); 
  
  let child = () => {
    console.log(this.value); 
  }
  child();
}
