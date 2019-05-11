const input = [
    [
        ['8C', 'TS', 'KC', '9H', '4S'],
        ['7D', '7S', '5D', '8S', 'KC']
    ],
    [
        ['3D', '6D', '7D', 'TD', 'QD'],
        ['JD', 'TD', 'KD', 'AD', 'QD']
    ],
    [
        ['JD', 'JS', 'JC', 'JH', '8S'],
        ['2H', '2D', '4C', '4D', '4S']
    ]
];


function hasRoyalFlush(cards) {
    let suits = new Set();
    let values = new Set();
    for (let card of cards) {
        suits.add(card[1]);
        if (suits.size != 1) return false;
        if (!new Set(['T', 'J', 'Q', 'K', 'A']).has(card[0])) return false;
        values.add(card[0]);
    }
    if (values.size != 5) return false;
    return true;
}

function hasStraightFlush(cards) {
    let suits = new Set();
    let values = [];
    for (let card of cards) {
        suits.add(card[1]);
        if (suits.size != 1) return false;
        //Mapping numbers to T, J, Q, K, A
        let value = card[0];
        if (value == 'T') {
            value = 10;
        } else if (value == 'J') {
            value = 11;
        } else if (value == 'Q') {
            value = 12;
        } else if (value == 'K') {
            value = 13;
        } else if (value == 'A') {
            value = 14;
        } else {
            value = Number(value);
        }
        values.push(value);
    }
    //Checking if they are consecutive numbers: Their sum = Sum of consecutive numbers ((a + l) * No. of terms) / 2
    values = values.sort((a, b) => a - b);
    if (values.reduce((acc, curr) => acc + curr, 0) != 0.5 * 5 * (values[0] + values[4])) return false;
    return true;
}

function hasFourOfAKind(cards) {
    //If set of card values has only two items, then it's 4 of a kind
    let values = new Set();
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 2) return false;
    }
    if (values.size == 2) return true;
    return false;
}

function hasFullHouse(cards) {
    let values = new Set();
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 2) return false;
    }
    let valueCount = {};
    for (let card of cards) {
        if (!valueCount[card[0]]) {
            valueCount[card[0]] = 0;
        }
        valueCount[card[0]]++;
    }
    for (let count of Object.values(valueCount)) {
        if (count != 2 && count != 3) {
            return false;
        }
    }
    return true;
}

function hasFlush(cards) {
    let suits = new Set();
    for (let card of cards) {
        suits.add(card[1]);
        if (suits.size > 1) return false;
    }
    return true;
}

function hasStraight(cards) {
    let values = [];
    for (let card of cards) {
        //Mapping numbers to T, J, Q, K, A
        let value = card[0];
        if (value == 'T') {
            value = 10;
        } else if (value == 'J') {
            value = 11;
        } else if (value == 'Q') {
            value = 12;
        } else if (value == 'K') {
            value = 13;
        } else if (value == 'A') {
            value = 14;
        } else {
            value = Number(value);
        }
        values.push(value);
    }
    //Checking if they are consecutive numbers: Their sum = Sum of consecutive numbers ((a + l) * No. of terms) / 2
    values = values.sort((a, b) => a - b);
    if (values.reduce((acc, curr) => acc + curr, 0) != 0.5 * 5 * (values[0] + values[4])) return false;
    return true;
}

function hasThreeOfAKind(cards) {
    let values = new Set();
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 3) return false;
    }
    let valueCount = {};
    for (let card of cards) {
        if (!valueCount[card[0]]) {
            valueCount[card[0]] = 0;
        }
        valueCount[card[0]]++;
    }
    for (let count of Object.values(valueCount)) {
        if (count != 3 && count != 1) {
            return false;
        }
    }
    return true;
}

function hasTwoPairs(cards) {
    let values = new Set();
    let cardValues = {}
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 3) return false;
        if (!cardValues[card[0]]) {
            cardValues[card[0]] = 0;
        }
        cardValues[card[0]]++;
    }
    let haspairs = 0;
    for (let count of Object.values(cardValues)) {
        if (count == 2) {
            haspairs++;
        }
    }
    if (values.size == 3 && haspairs == 2) return true;
    return false;
}

function hasOnePair(cards) {
    let values = new Set();
    let cardValues = {};
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 4) return false;
        if (!cardValues[card[0]]) {
            cardValues[card[0]] = 0;
        }
        cardValues[card[0]]++;
    }
    let pairs = 0;
    for (let count of Object.values(cardValues)) {
        if (count == 2) {
            pairs++;
        }
    }
    if (values.size == 4 && pairs == 1) return true;
    return false;
}

function getHighestCard(cards) {
    let values = [];
    for (let card of cards) {
        //Mapping numbers to T, J, Q, K, A
        let value = card[0];
        if (value == 'T') {
            value = 10;
        } else if (value == 'J') {
            value = 11;
        } else if (value == 'Q') {
            value = 12;
        } else if (value == 'K') {
            value = 13;
        } else if (value == 'A') {
            value = 14;
        } else {
            value = Number(value);
        }
        values.push(value);
    }
    values = values.sort((a, b) => a - b);
    return values[values.length - 1];
}

function compareHighestCards(hand1, hand2) {
    let winner = 0;
    console.log(hand1, hand2);
    let highest1 = getHighestCard(hand1);
    let highest2 = getHighestCard(hand2);
    while (winner == 0) {
        if (highest1 > highest2) {
            winner = 1;
        } else if (highest2 > highest1) {
            winner = 2;
        } else {
            // if highest cards are equal, remove them and compare the next highest cards
            // hand1 = hand1.filter(x => x != )
            for (let i = 0; i < hand1.length; i++) {
                //replace highest card with 0
                //but highest1 is a number (2, 14), so if it's a T, K, etc, we have to search for that and replace
            }
        }
    }
    return winner;
}

console.log(compareHighestCards(input[2][0], input[1][0]))

let hand1Wins = 0;
let hand2Wins = 0;
// for (let line of input) {
//     let hand1 = line[0];
//     let hand2 = line[1]
//     if (hasRoyalFlush(hand1) && !hasRoyalFlush(hand2)) {
//         hand1Wins++;
//         break;
//     }
//     if (!hasRoyalFlush(hand1) && hasRoyalFlush(hand2)) {
//         hand2Wins++;
//         break;
//     }


//     if (hasStraightFlush(hand1) && !hasStraightFlush(hand2)) {
//         hand1Wins++;
//         break;
//     }
//     if (!hasStraightFlush(hand1) && hasStraightFlush(hand2)) {
//         hand2Wins++;
//         break;
//     }
//     if (hasStraightFlush(hand1) && hasStraightFlush(hand2)) {
//         compareHighestCards(hand1, hand2);
//         break;
//     }
//     console.log(hand1);
//     console.log(hand2);
// }