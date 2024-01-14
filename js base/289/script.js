
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling</title>
  <style>
    #elem1 {
      background-color: green;
      padding: 20px;
    }

    #elem2 {
      background-color: lightblue;
      padding: 20px;
    }

    #elem3 {
      background-color: red;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="elem1">
    <div id="elem2">
      <div id="elem3"></div>
    </div>
  </div>

  <script>
    let elem1 = document.querySelector('#elem1');
    let elem2 = document.querySelector('#elem2');
    let elem3 = document.querySelector('#elem3');

    elem1.addEventListener('click', function() {
      console.log('Green');
    });

    elem2.addEventListener('click', function() {
      console.log('Light Blue');
    });

    elem3.addEventListener('click', function() {
      console.log('Red');
    });
  </script>
</body>
</html>
