// Задание 1
<ul id="elem">
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
</ul>

<script>
  let ul = document.getElementById('elem');

  
  let startElement = document.createElement('li');
  startElement.textContent = 'start';
  ul.prepend(startElement);

  
  let finishElement = document.createElement('li');
  finishElement.textContent = 'finish';
  ul.append(finishElement);
</script>
// Задание 2
<ul id="parent">
  <li>text</li>
  <li>text</li>
  <li id="elem">text</li>
  <li>text</li>
  <li>text</li>
</ul>

<script>
  let parent = document.getElementById('parent');
  let elem = document.getElementById('elem');

  
  let newElement = document.createElement('li');
  newElement.textContent = 'new';
  parent.insertBefore(newElement, elem);
</script>
// Задание 3
<ul id="parent">
  <li>text</li>
  <li>text</li>
  <li id="elem">text</li>
  <li>text</li>
  <li>text</li>
</ul>

<script>
  let parent = document.getElementById('parent');
  let elem = document.getElementById('elem');

  
  let newElement = document.createElement('li');
  newElement.textContent = 'new';
  parent.insertBefore(newElement, elem);

  
  newElement.addEventListener('click', function() {
    newElement.textContent += '!';
  });
</script>
