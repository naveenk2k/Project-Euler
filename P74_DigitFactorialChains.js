/*
QUESTION: The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:
    1!+4!+5! = 1 + 24 + 120 = 145

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:
169→ 363601→ 1454→ 169
871→ 45361→ 871
872→ 45362→ 872

It is not difficult to prove that EVERY starting number will eventually get stuck in a loop.For example,
69→ 363600→ 1454→ 169→ 363601(→1454)
78→ 45360→ 871→ 45361(→871)
540→ 145(→145)

Starting with 69 produces a chain of five non - repeating terms, but the longest non - repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below one million, contain exactly sixty non - repeating terms ?

ANSWER: 402 (~1.3s)
*/

'use strict';

let chain = [];
let chainLengths = [];
let factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function getNext(n) {
    if (chain[n]) {
        return chain[n];
    }
    let factorialSum = n
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc += factorial[curr], 0);
    chain[n] = factorialSum;
    return chain[n];
}

// NOTE: Method 2 (takes ~1.3s)
// Store lengths in an array too for quick lookup
function getchainLength(n) {
    let currentChain = [n];
    let next = getNext(n);
    while (!currentChain.includes(next)) {
        // If we already know the chain length of the next member, the chain length of the current member is that length + number of elements we have added to the chain.
        if (chainLengths[next]) {
            chainLengths[n] = currentChain.length + chainLengths[next];
            return chainLengths[n];
        }
        currentChain.push(next);
        next = getNext(next);
    }
    //Record chain length for each member in the chain till the repeated member. First one is equal to the length of the whole chain, second is one less, third is two less etc.
    //For example, consider: 4 -> 24 -> 26 -> 722 -> 5044 -> 169 -> 363601 -> 1454 -> 169
    // As soon as we detect the repeat, we know the lengths for every number up to that point:
    // length[4] = 8, length[24] = 7, length[26] = 6, length[722] = 5, length[5044] = 4, length[169] = 3
    // Note that we must be careful not to go past the point of repeat; length[363601] should not be 2.
    for (var i = 0; currentChain[i] != next; i++) {
        chainLengths[currentChain[i]] = currentChain.length - i;
    }
    chainLengths[next] = currentChain.length - i;
    return chainLengths[n];
}

let count = 0;
for (let i = 1; i < 10 ** 6; i++) {
    if (getchainLength(i) === 60) {
        count++;
    }
}
console.log(count);


//NOTE: Method 1: (~3.5s)
// Stores whole chains, then we check length
// function getChain(n) {
//     let currentChain = [n];
//     let next = getNext(n);
//     while (!currentChain.includes(next)) {
//         currentChain.push(next);
//         next = getNext(next);
//     }
//     return currentChain;
// }
// let count = 0;
// for (let i = 1; i < 10 ** 6; i++) {
//     if (getChain(i).length === 60) {
//         count++;
//     }
// }
// console.log(count);