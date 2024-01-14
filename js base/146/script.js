// Задание 1
let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

// Добавление еще одного дела в дату '2019-12-29'
affairs['2019-12-29'].push('data24');

// Добавление двух дел в дату '2019-12-31'
affairs['2019-12-31'].push('data41', 'data42');

// Задание 2
let studentGroups = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};

// Добавление нового студента в подгруппу 'subgroup11'
studentGroups.group1.subgroup11.push('student114');

// Добавление новой подгруппы в первую группу
studentGroups.group1.subgroup13 = ['student131', 'student132', 'student133'];

// Создание четвертой группы, подгруппы и добавление студентов
studentGroups.group4 = {
  'subgroup41': ['student411', 'student412'],
};
