1
let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};
Кавычки обязательны для ключей: '1a', 'b2', 'с-с', 'd 4', 'e5'
Кавычки необязательны для ключей: нет

2.
let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj['1a']);
console.log(obj['b2']);
console.log(obj['с-с']);
console.log(obj['d 4']);
console.log(obj['e5']);
