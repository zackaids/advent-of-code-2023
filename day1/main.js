/* 
The newly-improved calibration document consists of lines 
of text; each line originally contained a specific calibration 
value that the Elves now need to recover. On each line, the 
calibration value can be found by combining the first digit 
and the last digit (in that order) to form a single two-digit 
number.
*/
let test = [
    "1abc2", // 12
    "pqr3stu8vwx", // 38
    "a1b2c3d4e5f", // 15
    "treb7uchet", // 77
    
]
let test2 = ["two1nine", // 29
"eightwothree", // 83
"abcone2threexyz", // 23
"xtwone3four", // 24
"4nineeightseven2", // 42
"zoneight234", // 84
"7pqrstsixteen", // 76
];

let numbers = {
    1: "1",
    2: "2",
    3: "3",
    4: "4", 
    5: "5", 
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
}

const fs = require('fs')
const readData = fs.readFileSync('./day1/input.txt', 'utf-8');
const dataArray = readData.split('\n');

const myMap = new Map(Object.entries(numbers));

function getNumber(array) {
    let str = array.join('');
    for (let [key, value] of myMap) {
        str = str.split(key).join(value);
    }
    // in case of "eightwothree" returns "eigh23"
    console.log(str)
    let out = [];
    let sum = 0;
    for (let i=0; i<str.length; i++) {
        let temp = str[i].split("");
        let number = [];
        for (let j=0; j<=temp.length; j++) {
            if (myMap.has(temp[j])) {
                number.push(temp[j]);
            }
        }
        if (number.length > 2) {
            number = [number[0], number[number.length - 1]];
        };
        if (number.length === 1) {
            number = [number[0], number[0]];
        };
        let joined = number.join('');
        let updateNumber = parseInt(joined, 10);
        out.push(updateNumber);
    }
    for (let k=0; k<out.length; k++) {
        sum += out[k];
    }
    return sum;
}

console.log(getNumber(test2))



// "one": '1',
    // "two": '2',
    // "three": '3',
    // "four": '4',
    // "five": '5',
    // "six": '6',
    // "seven": '7',
    // "eight": '8',
    // "nine": '9',
    // "zero": '0',
    // "ten": '10',
    // "eleven": '11',
    // "twelve": '12',
    // "thirteen": '13',
    // "fourteen": '14',
    // "fifteen": '15',
    // "sixteen": '16',
    // "seventeen": '17',
    // "eighteen": '18',
    // "nineteen": '19',

    