document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('p');

  for (let elem of elems) {
    elem.addEventListener('click', addExclamationMark);
  }

  function addExclamationMark() {
    console.log(this.textContent);
    this.textContent += '!';
    this.removeEventListener('click', addExclamationMark);
  }
});
