;(function(selector1, selector2, selector3, btnSelector) {
  let input1 = document.querySelector(selector1);
  let input2 = document.querySelector(selector2);
  let input3 = document.querySelector(selector3);
  let calculateBtn = document.querySelector(btnSelector);

  function calculateSum() {
    let sum = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
    console.log(sum);
  }

  calculateBtn.addEventListener('click', calculateSum);
})('#input1', '#input2', '#input3', '#calculateBtn');
