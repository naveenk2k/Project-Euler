/* QUESTION: It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

Answer: 5777 (1s)
*/

let s = [];
let p = [];

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

function findSquares(n) {
    // finds all square numbers less than 'n'
    let squares = [];
    for (let i = n - 1; i > 0; i--) {
        if (Math.round(Math.sqrt(i)) === Math.sqrt(i)) {
            squares.push(i);
        }
    }
    squares = squares.map(x => x *= 2);
    return squares;
}

function findPrimesLessThanN(n) {
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function followsConjecture(i, s, p) {
    let found = false;
    for (let s1 of s) {
        for (let p1 of p) {
            if (s1 + p1 === i) {
                //console.log(i + '=' + s1 + '+' + p1);
                found = true;
                return true;
            }
        }
    }
    if (!found) return false;
}

for (let i = 3; i < 10000; i += 2) {
    s = findSquares(i);
    p = findPrimesLessThanN(i);
    if (!followsConjecture(i, s, p) && !isPrime(i)) {
        console.log(i);
        break;
    }

}