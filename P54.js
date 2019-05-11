// Working on this file. The set up is done. Need to start comparing hands now. Most of the comparison logic is written in the other .js file. But I'll probably need to modify each function to return the highest value if it passes a particular test (rank) so that I can compare them later if required(i.e same ranks).

const fs = require('fs');

const hands = fs
    .readFileSync('p054_poker.txt', 'utf8')
    .split('\n')
    .slice(0, -1)
    .map(hand => [hand.split(' ').slice(0, 5), hand.split(' ').slice(5)]);

/** Each hand is of the form
 [
     ['8C', 'TS', 'KC', '9H', '4S'],    // player 1
     ['7D', '2S', '5D', '3S', 'AC']     // player 2
 ]
 */

/**
 * For each set of hands, send it to multiple functions to compare and return a winner.
 */

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

let playerOneWins = 0;
for (const hand of hands) {
    if (compareHands(hand[0], hand[1]) == 1) playerOneWins++;
}
console.log(playerOneWins);

/**
function compareHands(hand1, hand2) {
    return 1 or 2;
}
*/
console.log(hands.slice(0, 10));