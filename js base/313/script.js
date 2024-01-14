// Задание 1
<ol id="elem"></ol>
<button id="button">click me</button>

<script>
  let olElement = document.getElementById('elem');
  let button = document.getElementById('button');

  button.addEventListener('click', function() {
    let liElement = document.createElement('li');
    olElement.appendChild(liElement);

    liElement.addEventListener('click', function() {
      this.textContent += '!';
    });
  });
</script>
