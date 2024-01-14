// Задание 1
;(function() {
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';

  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }

  window.exportedVar = str1;
  window.exportedFunc1 = func1;
  window.exportedFunc2 = func2;
})();
// Задание 2
;(function() {
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';

  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }
  function func4() {
    alert('функция модуля');
  }
  function func5() {
    alert('функция модуля');
  }

  window.module = { str1, str2, str3, func1, func2, func3, func4, func5 };
})();
