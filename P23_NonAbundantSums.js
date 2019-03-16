/* QUESTION: A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

ANSWER: 4179871 (2.4s)
*/

function getProperDivisorsSum(n) {
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
    return sum;
}

function isAbundant(n) {
    if (getProperDivisorsSum(n) > n) return true;
    else return false;
}

function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

let abundant = [];
let possibleSums = new Set();
let all = new Set();

for (let i = 1; i < 28111; i++) {
    if (isAbundant(i)) {
        abundant.push(i);
    }
}

for (let i = 0; i < abundant.length; i++) {
    for (let j = 0; j < abundant.length; j++) {
        possibleSums.add(abundant[i] + abundant[j]);
    }
}

for (let i = 1; i <= 28123; i++) {
    all.add(i);
}

let not = Array.from(difference(all, possibleSums));
let sum = not.reduce((p, c) => p + c, 0)
console.log(sum);