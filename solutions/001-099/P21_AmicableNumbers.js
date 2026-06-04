/* QUESTION: Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

Answer: 31626 (~50ms)
*/

// NOTE: Code isn't optimised at all, calculates things twice.

console.time('Time');

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
let amicable = [];
let amicableSum = 0;


function isAmicable(n) {
    if (amicable[getProperDivisorsSum(n)] == n) {
        console.log(n, getProperDivisorsSum(n));
        return [true, getProperDivisorsSum(n)];
    } else {
        amicable[n] = getProperDivisorsSum(n);
        return false;
    }
}

for (let i = 2; i <= 10000; i++) {
    if (isAmicable(i)[0]) {
        amicableSum += (i + isAmicable(i)[1]);
    }
}

console.log(amicableSum);
console.timeEnd('Time');