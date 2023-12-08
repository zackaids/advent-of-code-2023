
const fs = require('fs')
const readData = fs.readFileSync('./day3/testinput.txt', 'utf-8');
const dataArray = readData.split('\n');

console.log(dataArray);
function populateBoard() {
    let board = [];
    for (let y=0; y<dataArray.length; y++) {
        const row = [];
        for (let x=0; x<dataArray[y].length; x++) {
            
        }
    }
}