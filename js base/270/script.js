<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Exercises</title>
</head>
<body>

  <!-- Task 1 -->
  <input type="text" id="input1">
  <p id="output1"></p>

  <!-- Task 2 -->
  <input type="number" id="input2_1">
  <input type="number" id="input2_2">
  <input type="number" id="input2_3">
  <button onclick="calculateSum()">Calculate Sum</button>
  <p id="output2"></p>

  <!-- Task 3 -->
  <input type="number" id="input3">
  <p id="output3"></p>

  <!-- Task 4 -->
  <input type="text" id="input4">
  <p id="output4"></p>

  <!-- Task 5 -->
  <input type="text" id="input5">
  <input type="text">
  <input type="text">
  <input type="text">
  
  <!-- Task 6 -->
  <input type="text" id="input6">

  <!-- Task 7 -->
  <input type="text" id="input7">
  
  <!-- Task 8 -->
  <input type="text" id="input8">

  <!-- Task 9 -->
  <input type="text" id="input9">
  <button onclick="checkPalindrome()">Check Palindrome</button>

  <!-- Task 10 -->
  <input type="number" id="input10">

  <!-- Task 11 -->
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <button onclick="addOrderNumbers()">Add Order Numbers</button>

  <!-- Task 12 -->
  <a href="https:
  <a href="https:
  <button onclick="addHrefInBrackets()">Add Href in Brackets</button>

  <!-- Task 13 -->
  <a href="http:
  <a href="https:
  <button onclick="addArrowToHttpLinks()">Add Arrow to HTTP Links</button>

  <!-- Task 14 -->
  <p id="num1">4</p>
  <p id="num2">9</p>
  <p id="num3">16</p>
  <button onclick="addSquareToNumbers()">Add Square to Numbers</button>

  <!-- Task 15 -->
  <input type="text" id="input15">

  <!-- Task 16 -->
  <input type="number" id="input16" value="0">
  <button onclick="incrementValue()">+1</button>
  <button onclick="decrementValue()">-1</button>

  <!-- Task 17 -->
  <input type="text" id="input17">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>

  <!-- Task 18 -->
  <div>Some text here</div>
  <div>Another text here</div>

  <!-- Task 19 -->
  <input type="number" id="input19">

  <!-- Task 20 -->
  <input type="text" id="input20">
  <button onclick="generateRandomString()">Generate Random String</button>

  <!-- Task 21 -->
  <input type="text" id="input21">
  <button onclick="shuffleString()">Shuffle String</button>

  <!-- Task 22 -->
  <input type="number" id="input22">
  <button onclick="convertToFahrenheit()">Convert to Fahrenheit</button>
  <p id="output22"></p>

  <!-- Task 23 -->
  <input type="number" id="input23">
  <button onclick="calculateFactorial()">Calculate Factorial</button>
  <p id="output23"></p>

  <!-- Task 24 -->
  <input type="number" id="a">
  <input type="number" id="b">
  <input type="number" id="c">
  <button onclick="calculateRoots()">Calculate Roots</button>
  <p id="output24"></p>

  <script>
    
    document.getElementById('input1').addEventListener('blur', function() {
      document.getElementById('output1').textContent += this.value;
    });

    
    function calculateSum() {
      var sum = parseFloat(document.getElementById('input2_1').value) +
                parseFloat(document.getElementById('input2_2').value) +
                parseFloat(document.getElementById('input2_3').value);
      document.getElementById('output2').textContent = sum;
    }

    
    document.getElementById('input3').addEventListener('blur', function() {
      var digits = this.value.toString().split('').map(Number);
      var sum = digits.reduce((a, b) => a + b, 0);
      document.getElementById('output3').textContent = sum;
    });

    
    document.getElementById('input4').addEventListener('blur', function() {
      var numbers = this.value.split(',').map(Number);
      var average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
      document.getElementById('output4').textContent = average;
    });

    
    var inputFIO = document.getElementById('input5');
    var outputLastName = document.getElementById('output5_1');
    var outputFirstName = document.getElementById('output5_2');
    var outputPatronymic = document.getElementById('output5_3');

    inputFIO.addEventListener('blur', function() {
      var names = this.value.split(' ');
      outputLastName.value = names[0];
      outputFirstName.value = names[1];
      outputPatronymic.value = names[2];
    });

    
    var inputFIO2 = document.getElementById('input6');

    inputFIO2.addEventListener('blur', function() {
      var names = this.value.split(' ');
      var formattedNames = names.map(function(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      });
      this.value = formattedNames.join(' ');
    });

    
    var inputText = document.getElementById('input7');

    inputText.addEventListener('blur', function() {
      var wordCount = this.value.split(/\s+/).filter(function(word) {
        return word.length > 0;
      }).length;
      console.log(wordCount);
    });

    
    var inputDate = document.getElementById('input8');

    inputDate.addEventListener('blur', function() {
      var parts = this.value.split('.');
      if (parts.length === 3) {
        var formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];
        this.value = formattedDate;
      }
    });

    
    var inputWord = document.getElementById('input9');
    var btnCheckPalindrome = document.getElementById('btnCheckPalindrome');

    btn
