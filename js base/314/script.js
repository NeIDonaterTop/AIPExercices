// Задание 315
<ul id="list"></ul>

<script>
  let ulElement = document.getElementById('list');

  for (let i = 1; i <= 10; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = i.toString();
    ulElement.appendChild(liElement);
  }
</script>
