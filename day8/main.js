const fixed = {

}

let sequence = "LRLRLLRRLRRRLRLRRLRLLRRLRRRLRLRLRLRRLRLLRRRLRRRLLRRLRRLRLRRRLLLRRLRLRLRLRLRLLRRRLRLRRRLRRRLRRRLRRRLRRRLRRRLRRRLRRLRRRLLRLLRRLRRLRRLRRRLLRLRRLRLRLRRLLRLRRRLRRLLRLRLRRRLRRLRRLRRLRLLRLRRRLLLRRRLLLLRRLRRRLLLRRLLRLRLRLLLRRRLLRRRLLLRLRRLLRRRLRRRLRLLRRRLRLRLRLLRRLLRRLRRRLRLRRRLRRLRLRRLRRRR";

const fs = require('fs')
const readData = fs.readFileSync('./day8/input.txt', 'utf-8');
const lol = readData.split('\n');
let map = {}
for (let line of lol) {
    let updated = line.split(" = ");
    let key = updated[0];
    let value = updated[1].replace("(", "").replace(")", "").replace(/(\r\n|\n|\r)/gm,"").split(", ");
    map[key] = value;
}

// COMPLETELY WRONG FOR PART 2 

// let index = 1;
// function replaceTwo(map) {
//     if (map.endsWith("A") || map.endsWith("Z")) {
//         let temp = (index*11).toString() + map.slice(-1);
//         index++
//         return temp;
//     } else {
//         let x = "XXX"
//         return x;
//     }
// }

// let newMap = {};
// for (let key in map) {
//     let newKey = replaceTwo(key);
//     let newValue = map[key].map(replaceTwo);
//     newMap[newKey] = newValue;
// }

// console.log(newMap)

let testSequence = "LLR"
let test = {
    "AAA" : ["BBB", "BBB"],
    "BBB" : ["AAA", "ZZZ"],
    "ZZZ" : ["ZZZ", "ZZZ"],
}
let array = sequence.split("")

function getSteps(array, test) {
    let current = "AAA";
    let end = "ZZZ";
    let stepCount = 0;
    while (current !== end) {
        for (let i = 0; i<array.length; i++) {
            const step = array[i];

            if (step === "R") {
                current = test[current][1];
            } else if (step === "L") {
                current = test[current][0];
            }
            stepCount++
        }
    }
    return stepCount;
}

console.log(getSteps(array, map));