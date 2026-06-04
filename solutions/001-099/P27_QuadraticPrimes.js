/*
QUESTION: Euler discovered the remarkable quadratic formula:
                 n^2 + n + 41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤ n≤ 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible by 41.

The incredible formula n^2− 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0≤ n≤ 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

    n^2 + an + b, where | a | < 1000 and | b | ≤ 1000

where | n | is the modulus / absolute value of n
e.g. | 11 | = 11 and | −4 | = 4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

ANSWER: -59231 (~0.146s)
*/

function getPrimes(limit) {
    let primes = Array(limit).fill(true);
    primes[0] = primes[1] = false;
    let primeNumbers = [];
    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
            for (let j = i; j < limit; j += i) {
                primes[j] = false;
            }
        }
    }
    return primeNumbers;
}

function isPrime(n) {
    if (n <= 1 || n % 2 == 0) {
        return false; //1 isn't prime
    } else if (n == 2) {
        return true;
    } else {
        let limit = Math.sqrt(n);
        for (let i = 3; i <= limit; i += 2) { //checking all numbers less than sqrt(n) for factors
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function checkQuadratic(a, b, n) {
    let x = n * n + a * n + b;
    return isPrime(x);
}

let primes = getPrimes(1000);
let maxConsecutivePrimes = 0;
let max_a;
let max_b;

// LOGIC: For each prime, we try to find a quadratic equation that can produce that prime. (Because when n = 0, b has to be prime). Once we find a quadratic equation that fits b (i.e for n = 0 in the formula), we see how many other primes can be generated for increasing values of 'n'.

for (let b of primes.reverse()) {
    for (let a = -999; a < 1000; a++) {
        if (isPrime(1 - a + b) || isPrime(1 + a + b)) {
            let currentConsecutivePrimes = 0;
            for (let n = 0;; n++) {
                if (checkQuadratic(a, b, n)) {
                    currentConsecutivePrimes++;
                } else {
                    break;
                }
            }
            if (currentConsecutivePrimes > maxConsecutivePrimes) {
                maxConsecutivePrimes = currentConsecutivePrimes;
                max_a = a;
                max_b = b;
            }
        }
    }
}

console.log(max_a, max_b, maxConsecutivePrimes, max_a * max_b);