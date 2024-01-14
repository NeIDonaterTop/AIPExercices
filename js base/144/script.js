// Задание 1
let months = {
  'ru': ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  'en': ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
};

let lang1 = 'ru';
let month1 = 5;
console.log(months[lang1][month1]);

// Задание 2
let affairs = {
  '2018': {
    11: { 29: ['дело111', 'дело112', 'дело113'], 30: ['дело121', 'дело122', 'дело123'] },
    12: { 30: ['дело211', 'дело212', 'дело213'], 31: ['дело221', 'дело222', 'дело223'] },
  },
  '2019': {
    12: { 29: ['дело311', 'дело312', 'дело313'], 30: ['дело321', 'дело322', 'дело323'], 31: ['дело331', 'дело332', 'дело333'] },
  },
};

let year = '2019';
let month2 = 12;
let day = 30;

console.log(affairs[year][month2][day]);

// Задание 3
let obj3 = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' },
};

let key1 = 'key2';
let key2 = 'key4';
console.log(obj3[key1][key2]);

// Задание 4
let obj4 = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' },
};

let key3 = 'key1';
let key4 = 'key2';
console.log(obj4[key3][key4]);

// Задание 5
let obj5 = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' },
};

let key5 = 'key2';
console.log(obj5.key1[key5]);

// Задание 6
let obj6 = {
  key1: { key2: '12', key3: '13' },
  key2: { key4: '24', key5: '25' },
};

let key6 = 'key2';
console.log(obj6['key1'][key6]);
