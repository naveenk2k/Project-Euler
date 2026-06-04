/*
QUESTION: The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

ANSWER: 837799 (900ms)
*/

console.time('Time');

let values = [];
values[1] = 1;
let maxLen = 0;
let maxTerm = 1;

//Dynamic Programming: remembers the Collatz number for each number for easy look-up next time it is required
function collatz(n) {
    if (values[n]) {
        return values[n];
    }

    if (n % 2 === 0) {
        values[n] = 1 + collatz(n / 2);
    } else {
        values[n] = 2 + collatz((3 * n + 1) / 2);
    }

    return values[n];
}

for (let i = 1; i < 1000000; i++) {
    if (collatz(i) > maxLen) {
        maxLen = collatz(i);
        maxTerm = i;
    }
}

console.log(maxTerm);
console.timeEnd('Time');