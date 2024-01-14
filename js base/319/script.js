// Задание 1
<input type="text" id="sourceInput">
<button id="cloneButton">Clone Input</button>

<script>
  let sourceInput = document.getElementById('sourceInput');
  let cloneButton = document.getElementById('cloneButton');

  cloneButton.addEventListener('click', function() {
    let clonedInput = sourceInput.cloneNode(true);
    document.body.appendChild(clonedInput);
  });
</script>
