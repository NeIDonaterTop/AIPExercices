// Задание 1
<p id="message"></p>

<script>
  let messageParagraph = document.getElementById('message');

  setTimeout(function() {
    messageParagraph.textContent = 'Message after 10 seconds';
  }, 10000);
</script>
// Задание 2
let i = 0;

function timer() {
  setTimeout(function() {
    console.log(i++);
    timer();
  }, 1000);
}

timer();
