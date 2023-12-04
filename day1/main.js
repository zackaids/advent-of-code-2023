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
    "treb7uchet" // 77
]
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
    0: "0"
}
const myMap = new Map(Object.entries(numbers));
function getNumber(array) {
    let out = [];
    for (let i=0; i<=array.length; i++) {
        let temp = array[i].split('');
        let number = [];
        for (let j=0; j<=temp.length; j++) {
            if (myMap.has(temp[j])) {
                number.push(temp[j]);
            }
        }
        if (number.length > 2) {
            
        } else {

        }
    }
}
console.log(getNumber(test));