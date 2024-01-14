// Задание 1
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>

<script>
  let elem = document.getElementById('elem');

  
  let newParagraph = document.createElement('p');
  newParagraph.textContent = '!!!';
  elem.insertAdjacentElement('beforebegin', newParagraph);
</script>
// Задание 2
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>

<script>
  let elem = document.getElementById('elem');

  
  let newParagraph = document.createElement('p');
  newParagraph.textContent = '!!!';
  elem.insertAdjacentElement('afterend', newParagraph);
</script>
// Задание 3
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>

<script>
  let elem = document.getElementById('elem');

  
  let newParagraph = document.createElement('p');
  newParagraph.textContent = '!!!';
  elem.insertAdjacentElement('afterbegin', newParagraph);
</script>
// Задание 4
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>

<script>
  let elem = document.getElementById('elem');

  
  let newParagraph = document.createElement('p');
  newParagraph.textContent = '!!!';
  elem.insertAdjacentElement('beforeend', newParagraph);
</script>
// Задание 5
<div id="elem" style="border: 1px solid red;">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>

<script>
  let elem = document.getElementById('elem');

  
  elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>');
</script>
