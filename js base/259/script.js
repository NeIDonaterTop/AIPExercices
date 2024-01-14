
document.addEventListener('DOMContentLoaded', function () {
    // №1
    let elem = document.getElementById('elem');
    console.log(elem.classList.length);
  
    // №2
    for (let className of elem.classList) {
      console.log(className);
    }
  
    // №3
    elem.classList.add('xxx');
  
    // №4
    elem.classList.remove('www', 'zzz');
  
    // №5
    console.log(elem.classList.contains('ggg'));
  
    // №6
    elem.classList.toggle('www');
  });
  