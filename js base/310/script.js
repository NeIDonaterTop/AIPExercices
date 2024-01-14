// Задание 1
<button id="start">Start</button>
<p id="counter">0</p>

<script>
  let counter = document.getElementById('counter');
  let startButton = document.getElementById('start');
  let intervalId;

  startButton.addEventListener('click', function() {
    intervalId = setInterval(function() {
      counter.textContent = parseInt(counter.textContent) + 1;
    }, 1000);
  });
</script>
// Задание 2
<button id="start">Start</button>
<p id="counter">10</p>

<script>
  let counter = document.getElementById('counter');
  let startButton = document.getElementById('start');
  let intervalId;

  startButton.addEventListener('click', function() {
    intervalId = setInterval(function() {
      let value = parseInt(counter.textContent);
      counter.textContent = value > 0 ? value - 1 : value;
      if (value === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  });
</script>
// Задание 3
<input type="text" id="numberInput">
<div id="result"></div>

<script>
  let numberInput = document.getElementById('numberInput');
  let resultDiv = document.getElementById('result');

  numberInput.addEventListener('input', function() {
    let value = parseInt(numberInput.value);
    resultDiv.innerHTML = value * value;
  });
</script>
// Задание 4
<input type="text" id="numberInput">
<p id="countdown"></p>

<script>
  let numberInput = document.getElementById('numberInput');
  let countdownParagraph = document.getElementById('countdown');
  let intervalId;

  numberInput.addEventListener('blur', function() {
    let value = parseInt(numberInput.value);
    intervalId = setInterval(function() {
      countdownParagraph.textContent = value;
      value = value > 0 ? value - 1 : 0;
      if (value === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  });
</script>
// Задание 5
<input type="text" id="numberInput">
<button id="start">Start Countdown</button>
<p id="countdown"></p>

<script>
  let numberInput = document.getElementById('numberInput');
  let startButton = document.getElementById('start');
  let countdownParagraph = document.getElementById('countdown');
  let intervalId;

  startButton.addEventListener('click', function() {
    let value = parseInt(numberInput.value);
    countdownParagraph.textContent = value;
    intervalId = setInterval(function() {
      value = value > 0 ? value - 1 : 0;
      countdownParagraph.textContent = value;
      if (value === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  });
</script>
// Задание 6
<button id="start">Start Timer</button>
<button id="stop">Stop Timer</button>
<p id="timer">0</p>

<script>
  let startButton = document.getElementById('start');
  let stopButton = document.getElementById('stop');
  let timerParagraph = document.getElementById('timer');
  let intervalId;

  startButton.addEventListener('click', function() {
    intervalId = setInterval(function() {
      timerParagraph.textContent = parseInt(timerParagraph.textContent) + 1;
    }, 1000);
  });

  stopButton.addEventListener('click', function() {
    clearInterval(intervalId);
  });
</script>
// Задание 7
<p id="colorChanger" style="color: red;">Changing Color</p>

<script>
  let colorChanger = document.getElementById('colorChanger');
  let intervalId;

  intervalId = setInterval(function() {
    let currentColor = colorChanger.style.color;
    colorChanger.style.color = currentColor === 'red' ? 'green' : 'red';
  }, 1000);
</script>
// Задание 8
<p id="clock">00:00:00</p>

<script>
  let clock = document.getElementById('clock');

  setInterval(function() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
</script>
