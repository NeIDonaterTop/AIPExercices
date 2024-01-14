document.addEventListener('DOMContentLoaded', function () {
  // Задание 1
  let link = document.querySelector('#link');
  link.addEventListener('click', addHrefInBrackets);

  function addHrefInBrackets() {
    link.textContent += ` (${link.href})`;
    link.removeEventListener('click', addHrefInBrackets);
  }

  // Задание 2
  let countButton = document.querySelector('#countButton');
  countButton.addEventListener('click', incrementValue);

  function incrementValue() {
    countButton.value++;

    if (countButton.value >= 10) {
      countButton.removeEventListener('click', incrementValue);
    }
  }
});
