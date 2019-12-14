/*
QUESTION:
In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

It is possible to make £2 in the following way:
    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £2 be made using any number of coins?

ANSWER: 73682 (~40ms)

Explanation at: https://algorithmist.com/wiki/Coin_change
*/

console.time('Time');
const s = [1, 2, 5, 10, 20, 50, 100, 200];

const getCount = (n, m) => {
    if (n < 0 || m < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    return (getCount(n, m - 1) + getCount(n - s[m], m));
}

console.log(getCount(200, 7));
console.timeEnd('Time');
