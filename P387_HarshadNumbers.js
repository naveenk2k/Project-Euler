// NOTE: Program works till 10^7 only. Need a cleverer way.

let isPrime = require('./Useful Programs/PrimeTest');
let sieve = require('./Useful Programs/SieveOfEratosthenes');

// maybe add to an array
function isHarshadNumber(n) {
    return n % (n.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0)) == 0;
}

function isRightTrunctableHarshadNumber(n) {
    n = n.toString().split('');
    for (let i = n.length; i > 0; i--) {

        if (!isHarshadNumber(Number(n.join('')))) return false;
        n.pop();
    }
    return true;
}


function isStrongHarshadNumber(n) {
    return isHarshadNumber(n) && isPrime(n / n.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0));
}

function isStrongRightTructableHarshadPrime(n) {
    let trunc = Number(n.toString().split('').slice(0, -1).join(''));
    return (isStrongHarshadNumber(trunc) && isRightTrunctableHarshadNumber(trunc));
}

let primes = sieve(10 ** 7);
let sum = 0;


//TODO: Make sure all the numbers in your <10000 list are actually prime. Then lop off the rightmost digit of each and check if the resulting numbers are strong Harshad numbers. Next, continue lopping off the rightmost digits, verifying that the resulting numbers are still Harshad numbers.
for (let prime of primes) {
    if (isStrongRightTructableHarshadPrime(prime)) sum += prime;
}

console.log(sum);