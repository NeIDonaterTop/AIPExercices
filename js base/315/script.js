// Задание 1
<div id="parent"></div>

<script>
  let parent = document.getElementById('parent');

  for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    
    input.addEventListener('blur', function() {
      let paragraph = document.querySelector('p');
      paragraph.textContent = this.value;
    });

    parent.appendChild(input);
  }

  
  let paragraph = document.createElement('p');
  parent.appendChild(paragraph);
</script>
