
document.addEventListener('DOMContentLoaded', function () {
    // №1
    let elemValue = document.getElementById('elem');
    console.log(elemValue.getAttribute('value'));
  
    // №2
    let elemClass = document.getElementById('elemClass');
    console.log(elemClass.getAttribute('class'));
  
    // №3
    let elemSetValue = document.getElementById('elemSetValue');
    elemSetValue.setAttribute('value', 'text');
  
    // №4
    let elemSetClass = document.getElementById('elemSetClass');
    elemSetClass.setAttribute('class', 'valid');
  
    // №5
    let elemRemoveValue = document.getElementById('elemRemoveValue');
    elemRemoveValue.removeAttribute('value');
  
    // №6
    let elemHasValue = document.getElementById('elemHasValue');
    console.log(elemHasValue.hasAttribute('value'));
  });
  