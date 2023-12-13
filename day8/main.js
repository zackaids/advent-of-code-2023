

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



let testSequence = "LLR"
let test = {
    "AAA" : ["BBB", "BBB"],
    "BBB" : ["AAA", "ZZZ"],
    "ZZZ" : ["ZZZ", "ZZZ"],
}
let testSequence2 = "LR";
let test2 = {
    "11A" : ["11B", "XXX"],
    "11B" : ["XXX", "11Z"],
    "11Z" : ["11B", "XXX"],
    "22A" : ["22B", "XXX"],
    "22B" : ["22C", "22C"],
    "22C" : ["22Z", "22Z"],
    "22Z" : ["22B", "22B"],
    "XXX" : ["XXX", "XXX"],
}
let array = testSequence2.split("")


function getSteps(array, test) {
    let nodes = Object.keys(test).filter(node => node.endsWith("A"));
    let end = "Z";
    let stepCount = 0;
    while (!nodes.every(node => node.endsWith(end))) {
        let nextNode = [];
        console.log(nodes)

        for (let i = 0; i<nodes.length; i++) {
            let current = nodes[i];

            const step = array[i % array.length];
            if (step === "R") {
                current = test[current][1].charAt(test[current][1].length - 1);
            } else if (step === "L") {
                current = test[current][0].charAt(test[current][1].length - 1);
            }
            
            nextNode.push(current);
            
        }
        nodes = nextNode;
        stepCount++
    }
    return stepCount;
}

console.log(getSteps(array, test2));

// function getSteps(array, test) {
//     let current = "AAA";
//     let end = "ZZZ";
//     let stepCount = 0;
//     while (current !== end) {
//         for (let i = 0; i<array.length; i++) {
//             const step = array[i];

//             if (step === "R") {
//                 current = test[current][1];
//             } else if (step === "L") {
//                 current = test[current][0];
//             }
//             stepCount++
//         }
//     }
//     return stepCount;
// }

