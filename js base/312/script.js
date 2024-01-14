// Задание 1
<ol id="elem"></ol>

<script>
  let olElement = document.getElementById('elem');
  let liElement = document.createElement('li');
  liElement.textContent = 'item';
  olElement.appendChild(liElement);
</script>
// Задание 2
<ol id="elem"></ol>
<button id="button">click me</button>

<script>
  let olElement = document.getElementById('elem');
  let button = document.getElementById('button');

  button.addEventListener('click', function() {
    let liElement = document.createElement('li');
    liElement.textContent = 'item';
    olElement.appendChild(liElement);
  });
</script>
