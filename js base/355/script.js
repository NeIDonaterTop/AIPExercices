// Модуль с передачей настроек через объект

let config = {
  root: '#parent',
  type: 'p',
  amount: 5
};

;(function ({ root, type = 'p', amount = 5 }) {
  let parent = document.querySelector(root);

  for (let i = 1; i <= amount; i++) {
    let elem = document.createElement(type);
    parent.append(elem);
  }
})(config);
