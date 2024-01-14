
;(function() {
    let elem = document.querySelector('#div1'); 
  
    function func(num) {
      return num * num; 
    }
  
    elem.addEventListener('click', function() {
      this.textContent = func(elem.textContent);
    });
  })();