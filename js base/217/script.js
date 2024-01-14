// zadanie 1
function func([name, surname, department, position, salary]) {
    
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

// zadanie 2
function func([name, surname, info]) {
    
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

// zadanie 3
function func([name, surname, department, position = 'джуниор']) {
    
}

func(['John', 'Smit', 'development']);

// zadanie 4
function func(department, [name, surname], hired) {
    
}

func('development', ['John', 'Smit'], [2018, 12, 31]);

// zadanie 5
function func({ color, width, height }) {
    
}

func({ color: 'red', width: 400, height: 500 });

// zadanie 6
function func({ width, height, color = 'black' }) {
    
}

func({ color: 'red', width: 400, height: 500 });
