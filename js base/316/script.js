// Задание 1
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

<script>
  let items = document.querySelectorAll('li');

  for (let item of items) {
    item.addEventListener('click', function() {
      item.remove();
    });
  }
</script>
// Задание 2
<ul id="parent">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

<input type="submit" id="button">

<script>
  let button = document.getElementById('button');
  let parent = document.getElementById('parent');

  button.addEventListener('click', function() {
    let lastItem = parent.lastElementChild;
    if (lastItem) {
      lastItem.remove();
    }
  });
</script>
