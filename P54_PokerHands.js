/* QUESTION:
In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.

The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand    Player 1	        Player 2	 	    Winner
1	    5H 5C 6S 7S KD      2C 3S 8S 8D TD      Player 2
        Pair of Fives       Pair of Eights

2	 	5D 8C 9S JS AC      2C 5C 7D 8S QH      Player 1
        Highest card Ace    Highest card Queen

3	 	2D 9C AS AH AC      3D 6D 7D TD QD      Player 2
        Three Aces          Flush with Diamonds

4	 	4D 6S 9H QH QC      3D 6D 7H QD QS      Player 1
        Pair of Queens      Pair of Queens
        Highest card Nine   Highest card Seven

5	 	2H 2D 4C 4D 4S      3C 3D 3S 9S 9D      Player 1
        Full House          Full House
        with Three Fours    with Three Threes

The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?

ANSWER: 376 (~70ms)
*/

console.time('Time');

const fs = require('fs');

const hands = fs
    .readFileSync('p054_poker.txt', 'utf8')
    .split('\n')
    .slice(0, -1)
    .map(hand => [hand.split(' ').slice(0, 5), hand.split(' ').slice(5)]);

/** 'hands' is an array where each member is a set of hands of the form:
 [
     ['8C', 'TS', 'KC', '9H', '4S'],    // player 1
     ['7D', '2S', '5D', '3S', 'AC']     // player 2
 ]
 */

function getEquivalentNumber(value) {
    if (value == 'T') {
        return 10;
    } else if (value == 'J') {
        return 11;
    } else if (value == 'Q') {
        return 12;
    } else if (value == 'K') {
        return 13;
    } else if (value == 'A') {
        return 14;
    } else {
        return Number(value);
    }
}

// If the hand has a royal flush, this function will return [true]; else [false]
function hasRoyalFlush(cards) {
    let suits = new Set();
    let values = new Set();
    for (let card of cards) {
        suits.add(card[1]);
        if (suits.size != 1) return [false];
        if (!new Set(['T', 'J', 'Q', 'K', 'A']).has(card[0])) return [false];
        values.add(card[0]);
    }
    if (values.size != 5) return [false];
    return [true];
}

// If the hand has a straight flush, this function will return [true, highValue]; else [false]
function hasStraightFlush(cards) {
    let suits = new Set();
    let values = [];
    for (let card of cards) {
        suits.add(card[1]);
        if (suits.size != 1) return [false];
        //Mapping numbers to T, J, Q, K, A
        let value = card[0];
        value = getEquivalentNumber(value)
        values.push(value);
    }
    //Checking if they are consecutive numbers: Their sum = Sum of consecutive numbers ((a + l) * No. of terms) / 2
    values = values.sort((a, b) => a - b);
    if (values.reduce((acc, curr) => acc + curr, 0) != 0.5 * 5 * (values[0] + values[4])) return [false];
    const highValue = Math.max(...values);
    return [true, highValue];
}


// If the hand has a 4 of a kind, this function will return [true, quadrupleValue]; else [false]
function hasFourOfAKind(cards) {
    let values = new Set();
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 2) return [false];
    }
    if (values.size == 2) {
        let valueCount = {};
        for (let card of cards) {
            if (!valueCount[card[0]]) {
                valueCount[card[0]] = 0;
            }
            valueCount[card[0]]++;
        }
        for (const [value, count] of Object.entries(valueCount)) {
            if (count === 4) {
                return [true, value];
            }
        }
    }
    return [false];
}

// If the hand has a full house, this function will return [true, tripleValue, pairValue]; else [false]
function hasFullHouse(cards) {
    let values = new Set();
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 2) return [false];
    }
    let valueCount = {};
    for (let card of cards) {
        if (!valueCount[card[0]]) {
            valueCount[card[0]] = 0;
        }
        valueCount[card[0]]++;
    }
    let pairValue, tripleValue;
    for (let [value, count] of Object.entries(valueCount)) {
        if (count != 2 && count != 3) {
            return [false];
        } else if (count === 2)
            pairValue = value;
        else if (count === 3)
            tripleValue = value;
    }
    return [true, tripleValue, pairValue];
}

// If the hand has a flush, this function will return [true]; else [false].
// Note that to compare two flushes, we have to use the function 'getTieBreakWinner'
function hasFlush(cards) {
    let suits = new Set();
    for (let card of cards) {
        suits.add(card[1]);
        if (suits.size > 1) return [false];
    }
    return [true];
}

// If the hand has a straight, this function will return [true, highValueOfStraight]; else [false]
function hasStraight(cards) {
    let values = [];
    for (let card of cards) {
        //Mapping numbers to T, J, Q, K, A
        let value = card[0];
        value = getEquivalentNumber(value);
        values.push(value);
    }

    const n = values.length;
    const max = Math.max(...values);
    const min = Math.min(...values);

    if (max - min + 1 == n) {
        /* Create a temp array to hold visited flag of all elements.
           Note that, calloc is used here so that all values are initialized
           as false */
        let visited = [false, false, false, false, false];
        for (let i = 0; i < n; i++) {
            /* If we see an element again, then return false */
            if (visited[values[i] - min] != false)
                return false;

            /* If visited first time, then mark the element as visited */
            visited[values[i] - min] = true;
        }
        /* If all elements occur once, then return true */
        return [true, max];
    }
    return [false];
}


// If the hand has 3 of a kind, this function will return [true, valueOfTriple]; else [false]
function hasThreeOfAKind(cards) {
    let values = new Set();
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 3) return [false];
    }
    let valueCount = {};
    for (let card of cards) {
        if (!valueCount[card[0]]) {
            valueCount[card[0]] = 0;
        }
        valueCount[card[0]]++;
    }
    for (let [card, count] of Object.entries(valueCount)) {
        if (count != 3 && count != 1) {
            return [false];
        } else if (count === 3)
            return [true, card];
    }
    return [false];
}

// If the hand has two pairs, this function will return [true, valueOfHigherPair, valueOfLowerPair]; else [false]
function hasTwoPairs(cards) { // Two *different* pairs
    let values = new Set();
    let cardValues = {}
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 3) return [false];
        if (!cardValues[card[0]]) {
            cardValues[card[0]] = 0;
        }
        cardValues[card[0]]++;
    }
    let hasPairs = 0;
    for (let count of Object.values(cardValues)) {
        if (count == 2) {
            hasPairs++;
        }
    }
    let pairs = []; // The values which occur in pairs (in sorted order of highest value first)
    if (values.size == 3 && hasPairs == 2) {
        for (const key of Object.keys(cardValues)) {
            if (cardValues[key] === 2)
                pairs.push(key);
        }

        pairs = pairs.map(getEquivalentNumber);
        pairs.sort((a, b) => a - b).reverse();
        return [true, ...pairs];
    }
    return [false];
}

// If the hand has a pair, this function will return [true, valueOfPair]; else [false]
function hasOnePair(cards) {
    let values = new Set();
    let cardValues = {};
    for (let card of cards) {
        values.add(card[0]);
        if (values.size > 4) return [false];
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
    if (values.size == 4 && pairs == 1) {
        for (const key of Object.keys(cardValues)) {
            if (cardValues[key] === 2)
                return [true, key]
        }
    }
    return [false];
}

function getSortedCardsValues(cards) {
    let values = [];
    for (let card of cards) {
        let value = card[0];
        value = getEquivalentNumber(value);
        values.push(value);
    }
    values = values.sort((a, b) => a - b).reverse();
    return values;
}

// To resolve tie-breaks, i.e when both hands have the same rank
// Returns 1 or 2 depending on which hand has the highest card value
function getTieBreakWinner(hand1, hand2) {
    const hand1Values = getSortedCardsValues(hand1);
    const hand2Values = getSortedCardsValues(hand2);
    for (let i = 0; i < 5; i++) {

        let val1 = hand1Values[i];
        let val2 = hand2Values[i];
        val1 = getEquivalentNumber(val1);
        val2 = getEquivalentNumber(val2);

        if (val1 > val2) return 1;
        else if (val2 > val1) return 2;
    }
    console.log(`You shouldn't read this, if you do, there's something wrong in the tie break function`);
}

function getRank(hand) {
    if (hasRoyalFlush(hand)[0]) return 10;
    if (hasStraightFlush(hand)[0]) return 9;
    if (hasFourOfAKind(hand)[0]) return 8;
    if (hasFullHouse(hand)[0]) return 7;
    if (hasFlush(hand)[0]) return 6;
    if (hasStraight(hand)[0]) return 5;
    if (hasThreeOfAKind(hand)[0]) return 4;
    if (hasTwoPairs(hand)[0]) return 3;
    if (hasOnePair(hand)[0]) return 2;
    return 1;
}

function compareHands(hand1, hand2) {

    const hand1Rank = getRank(hand1);
    const hand2Rank = getRank(hand2);

    if (hand1Rank > hand2Rank) {
        return 1;
    } else if (hand2Rank > hand1Rank) {
        return 2;
    } else {
        // Ranks are equal and we need to compare further
        // This can only happen if neither of the hands are a royal flush
        let hand1Values, hand2Values;
        const rank = hand1Rank; // === hand2Rank
        switch (rank) {
            case 9:
                hand1Values = hasStraightFlush(hand1);
                hand2Values = hasStraightFlush(hand2);
                break;
            case 8:
                hand1Values = hasFourOfAKind(hand1);
                hand2Values = hasFourOfAKind(hand2);
                break;
            case 7:
                hand1Values = hasFullHouse(hand1);
                hand2Values = hasFullHouse(hand2);
                break;
            case 6:
                hand1Values = hasFlush(hand1);
                hand2Values = hasFlush(hand2);
                break;
            case 5:
                hand1Values = hasStraight(hand1);
                hand2Values = hasStraight(hand2);
                break;
            case 4:
                hand1Values = hasThreeOfAKind(hand1);
                hand2Values = hasThreeOfAKind(hand2);
                break;
            case 3:
                hand1Values = hasTwoPairs(hand1);
                hand2Values = hasTwoPairs(hand2);
                break;
            case 2:
                hand1Values = hasOnePair(hand1);
                hand2Values = hasOnePair(hand2);
                break;
            case 1:
                return getTieBreakWinner(hand1, hand2);
            default:
                console.log(`Something went wrong in your compareHands function`);
                break;
        }

        for (let i = 1; i < hand1Values.length; i++) {
            let val1 = hand1Values[i];
            let val2 = hand2Values[i];

            val1 = getEquivalentNumber(val1);
            val2 = getEquivalentNumber(val2);

            if (val1 > val2) {
                return 1;
            } else if (val2 > val1) {
                return 2;
            }
        }
        return getTieBreakWinner(hand1, hand2);
    }
}

let playerOneWins = 0;
let i = 0;
for (const hand of hands) {
    if (compareHands(hand[0], hand[1]) === 1) {
        playerOneWins++;
    }
    i++;
}
console.log(playerOneWins);

console.timeEnd('Time');
