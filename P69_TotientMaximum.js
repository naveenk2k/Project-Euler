/* QUESTION: Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of numbers less than n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.

n	Relatively Prime	φ(n)	n/φ(n)
2	1					1		2
3	1,2					2		1.5
4	1,3					2		2
5	1,2,3,4				4		1.25
6	1,5					2		3
7	1,2,3,4,5,6			6		1.1666...
8	1,3,5,7				4		2
9	1,2,4,5,7,8			6		1.5
10	1,3,7,9				4		2.5
It can be seen that n=6 produces a maximum n/φ(n) for n ≤ 10.

Find the value of n ≤ 1,000,000 for which n/φ(n) is a maximum.


ANSWER: 510510 (~1s)
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

let max = 5.213541666666667;
let maxNum = 0;
for (let i = 100000; i < 1000000; i += 2) {
    let p;
    if (isPrime(i)) p = i - 1;
    else {
        p = phi(i);
    }
    if (i / p > max) {
        max = i / p;
        maxNum = i;
    }

}

console.log(max, maxNum);