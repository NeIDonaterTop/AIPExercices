// №1
let paragraph1 = document.getElementById('paragraph1');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
  console.log(paragraph1.innerHTML);
});

// №2
let paragraph2 = document.getElementById('paragraph2');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
  paragraph2.innerHTML = '<b>New Bold Text</b>';
});
