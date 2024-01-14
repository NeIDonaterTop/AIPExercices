let start = document.querySelector('#start');

start.addEventListener('click', function func() {
  let i = 100;

  const timerId = setInterval(function () {
    console.log(i--);

    if (i < 0) {
      clearInterval(timerId);
      start.addEventListener('click', func);
    }
  }, 1000);

  this.removeEventListener('click', func);
});
