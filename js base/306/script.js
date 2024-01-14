// Задание 1
let count = 100;
let timerId;

start.addEventListener('click', function () {
  timerId = setInterval(function () {
    console.log(count--);
    if (count < 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(timerId);
  count = 100;
});
// Задание 2
let count = 100;
let timerId;

start.addEventListener('click', function () {
  timerId = setInterval(function () {
    console.log(count--);
    if (count < 0) {
      clearInterval(timerId);
      stop.removeEventListener('click', stopHandler);
    }
  }, 1000);
});

function stopHandler() {
  clearInterval(timerId);
  count = 100;
}

stop.addEventListener('click', stopHandler);
//Задание 3
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function () {
  timerId = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(timerId);
});
// Задание 4
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function () {
  timerId = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(timerId);
});
// Задание 5
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function () {
  timerId = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(timerId);
});
// Задание 6
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function () {
  timerId = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stop.addEventListener('click', function () {
  clearInterval(timerId);
});
