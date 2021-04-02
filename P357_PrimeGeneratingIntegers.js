/*
Consider the divisors of 30: 1,2,3,5,6,10,15,30.
It can be seen that for every divisor d of 30, d+30/d is prime.

Find the sum of all positive integers n not exceeding 100 000 000
such that for every divisor d of n, d+n/d is prime.

Answer: 1739023853137 (99s)
*/

const sieve = require('./Useful Programs/SieveOfEratosthenes');
const getDivisors = require('./Useful Programs/AllFactors').getProperDivisors;
const isPrime = require('./Useful Programs/PrimeTest');

const limit = 10 ** 8; 
const primes = sieve(limit);

const satisfies = n => {
    const factors = getDivisors(n);
    const halfFactors = factors.slice(0, Math.ceil(factors.length / 2));
    for (const factor of halfFactors.slice(2,)) {
        // if (!binarySearch(primes, (factor + n / factor))) {
        //     return false;
        // }
        if (!isPrime((factor + n / factor))) {
            return false;
        }
    }
    return true;
};

let sum = 1; // The number '1' satisfies the conditions but I don't include it in the loop below so I'm starting the sum from '1'. 

// All such numbers have to be of the form 4k+2 for all k=0,1,2,...etc.
for (let i = 2; i <= limit; i += 4) {
    if (isPrime(i + 1) && isPrime(2 + i / 2) && satisfies(i)) {
        sum += i;
    }
}

console.log(sum);

//27814470276 till 10^7 in 4.5s
// 1739023853136 till 10^8 in 99s. (Answer is 1 more than this).