// №1
function sumArrayElements(arr) {
    return arr.reduce((sum, element) => sum + element, 0);
}

// №2
function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// №3
function stringToCharArray(str) {
    return Array.from(str);
}

// №4
function reverseString(str) {
    return str.split('').reverse().join('');
}

// №5
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// №6
function capitalizeEachWord(str) {
    return str.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}

// №7
function fillArray(n) {
    return Array.from({ length: n }, (_, index) => index + 1);
}

// №8
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// №9
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// №10
function areFriendlyNumbers(num1, num2) {
    return (
        sumArrayElements(getDivisors(num1).slice(0, -1)) === num2 &&
        sumArrayElements(getDivisors(num2).slice(0, -1)) === num1
    );
}

// №11
function findFriendlyNumbersInRange(start, end) {
    const friendlyNumbers = [];
    for (let i = start; i <= end; i++) {
        for (let j = i + 1; j <= end; j++) {
            if (areFriendlyNumbers(i, j)) {
                friendlyNumbers.push([i, j]);
            }
        }
    }
    return friendlyNumbers;
}

// №12
function isPerfectNumber(num) {
    return sumArrayElements(getDivisors(num).slice(0, -1)) === num;
}

// №13
function findLuckyTickets() {
    const luckyTickets = [];
    for (let i = 100; i <= 999; i++) {
        const digits = Array.from(String(i), Number);
        if (digits[0] + digits[1] + digits[2] === digits[3] + digits[4] + digits[5]) {
            luckyTickets.push(i);
        }
    }
    return luckyTickets;
}

// №14
function getCommonDivisors(num1, num2) {
    const divisors1 = getDivisors(num1);
    const divisors2 = getDivisors(num2);
    return divisors1.filter(divisor => divisors2.includes(divisor));
}

// №15
function transliterate(str) {
    const transliterationTable = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
        'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k',
        'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
        'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    return str.toLowerCase().split('').map(char => transliterationTable[char] || char).join('');
}

// №16
function numberToWords(num) {
    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    if (num === 0) {
        return 'ноль';
    }

    const getUnits = (number) => units[number];
    const getTens = (number) => tens[Math.floor(number / 10)];
    const getTeens = (number) => teens[number - 10];
    const getHundreds = (number) => hundreds[Math.floor(number / 100)];

    const result = [];

    const unitsDigit = num % 10;
    const tensDigit = Math.floor((num % 100) / 10);
    const hundredsDigit = Math.floor(num / 100);

    if (hundredsDigit > 0) {
        result.push(getHundreds(hundredsDigit));
    }

    if (tensDigit === 1) {
        result.push(getTeens(num % 100));
    } else {
        if (tensDigit > 1) {
            result.push(getTens(num));
        }
        if (unitsDigit > 0) {
            result.push(getUnits(unitsDigit));
        }
    }

    return result.join(' ');
}
