/*
QUESTION: The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

Since this chain returns to its starting point, it is called an amicable chain.

Find the smallest member of the longest amicable chain with no element exceeding one million.

ANSWER: 14316 (~700ms)
*/

console.time('time');

//Global variable so that look up becomes easy and we avoid repeated calculation of divisors. (Memoisation technique)
let properDivisorsSum = [];

function getProperDivisorsSum(n) {
    if (properDivisorsSum[n]) {
        return properDivisorsSum[n];
    } else {
        let sum = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                if (i === n / i) {
                    sum += i;
                } else {
                    sum += (i + n / i);
                }
            }
        }
        sum -= n;
        properDivisorsSum[n] = sum;
        return properDivisorsSum[n];
    }
}

function getAmicableChain(n) {
    let chain = [n];
    let next = getProperDivisorsSum(n)
    while (next !== chain[0] && next <= 10 ** 6 && next > 0 && !chain.includes(next)) {
        chain.push(next);
        next = getProperDivisorsSum(next);
    }
    let last = chain[chain.length - 1];
    if (getProperDivisorsSum(last) !== chain[0]) {
        return false;
    } else {
        return chain;
    }
}

let maxChain; //longest chain found
let maxLength = 0;

//Arrived at 100,000 by slowly increasing the limit. It didn't change with further increase and besides the elements in this chain were very close to 1,000,000 already so this had to be the answer.
for (let i = 1; i < 100000; i++) {
    let chain = getAmicableChain(i);
    if (chain.length > maxLength) {
        maxLength = chain.length;
        maxChain = chain;
    }
}

console.log(maxChain[0]);
console.log(maxLength);
console.timeEnd('time');