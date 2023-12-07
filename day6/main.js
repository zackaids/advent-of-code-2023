let test = {
    'case1': {
        'time': 7,
        'distance': 9
    },
    'case2': {
        'time': 15,
        'distance': 40 
    },
    'case3': {
        'time': 30,
        'distance': 200 
    },
}

let input = {
    'case1': {
        'time': 56,
        'distance': 499
    },
    'case2': {
        'time': 97,
        'distance': 2210 
    },
    'case3': {
        'time': 77,
        'distance': 1097 
    },
    'case4': {
        'time': 93,
        'distance': 1440
    },
    // 'case5': {
    //     'time': 56977793,
    //     'distance': 499221010971440
    // }
}

let product = 1;

function numberOfWays(input) {
    let numOfWays = 0;
    let speed = 0;
    for (let i=0; i<input.time; i++) {
        let remainingTime = input.time-i;
        speed = i;
        let traveled = speed*remainingTime;
        if (traveled > input.distance) {
            numOfWays++;
        }
    }
    return numOfWays;
}

for (const key in input) {
    if (input.hasOwnProperty(key)) {
        product *= numberOfWays(input[key]);
    }
}

console.log(product);
// console.log(numberOfWays(input.case5));