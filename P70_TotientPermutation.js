/* QUESTION: Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.
The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

Find the value of n, 1 < n < 107, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum.

ANSWER: 8319823 (~90s)
*/

function phi(n) {
    let result = n; // Initialize result as n

    // Consider all prime factors of n and subtract their
    // multiples from result
    for (let p = 2; p * p <= n; ++p) {

        // Check if p is a prime factor.
        if (n % p == 0) {

            // If yes, then update n and result
            while (n % p == 0) {
                n /= p;
            }

            //We know that result = result * (1 - 1 / p), i.e
            result -= result / p;
        }
    }

    // If n has a prime factor greater than sqrt(n)
    // (There can be at-most one such prime factor)
    if (n > 1)
        result -= result / n;

    return result;
}

function isPrime(n) {
    let i, prime = true;
    if (n === 1 || n === 0) {
        return false; //1 isn't prime
    } else {
        for (i = 2; i <= Math.sqrt(n); i++) { //checking all numbers less than sqrt(n) for factors
            if (n % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            return true;
        } else {
            return false;
        }
    }
}

function isPermutation(x, y) {
    x = Array.from(x.toString()).sort().join('');
    y = Array.from(y.toString()).sort().join('');
    return x.length === y.length && x === y;

}


let min = 3;
let minNum = 0;
let ph;
for (let i = 1000000; i < 10000000; i++) {
    let p;
    if (isPrime(i)) p = i - 1;
    else {
        p = phi(i);
    }
    if (isPermutation(i, p)) {
        if (i / p < min) {
            min = i / p;
            minNum = i;
            ph = p;
        }
    }

}

console.log(min, minNum, ph);
//1.0007090511248113 8319823 8313928