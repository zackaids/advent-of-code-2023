const cards = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    'T': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
};

const test = {
    "bid1": {
        "hand": "32T3K",
        "bid": 765
    },
    "bid2": {
        "hand": "T55J5",
        "bid": 684
    },
    "bid3": {
        "hand": "KK677",
        "bid": 28
    },
    "bid4": {
        "hand": "KTJJT",
        "bid": 220
    },
    "bid5": {
        "hand": "QQQJA",
        "bid": "483"
    }
}

function determineHand(test) {
    array = test.hand.split("");
    array.sort((a, b) => cards[b] - cards[a]);
    const counts = {};
    for (let i of array) {
        counts[i] = (counts[i] || 0) + 1;
    }
    const values = Object.values(counts).sort((a, b) => b - a);
    if (values[0] === 5) {
        return 7
    }
    if (values[0] === 4) {
        return 6
    }
    if (values[0] === 3 && values[1] === 2) {
        return 5
    }
    if (values[0] === 3) {
        return 4
    }
    if (values[0] === 2 && values[1] === 2) {
        return 3
    }
    if (values[0] === 2 ) {
        return 2 
    }
    return 1
}
console.log(determineHand(test.bid1))