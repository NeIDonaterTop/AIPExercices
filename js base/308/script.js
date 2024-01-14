// Задание 1
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() { 
  let self = this;
  
  setInterval(function() {
    console.log(self.value);
  }, 1000);
});
// Задание 2
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() { 
  setInterval(() => console.log(this.value), 1000);
});
// Задание 3
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() { 
  setInterval((function(self) {
    return function() {
      console.log(self.value);
    }
  })(this), 1000);
});
