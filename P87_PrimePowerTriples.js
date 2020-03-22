const sieve = require('./Useful Programs/SieveOfEratosthenes');
const limit = 50 * (10 ** 6);

const primes = sieve(10 ** 2)

const powerTriple = (p1, p2 = p1, p3 = p1) => p1 ** 2 + p2 ** 3 + p3 ** 4;

for (let i = primes.length - 1; i > -1; i--) {
    if (powerTriple(primes[i]) < limit) {
        console.log(primes[i], powerTriple(primes[i]));
        break;
    }
}

const primesBelow83 = primes.filter(p => p <= 83);
console.log(primesBelow83.length);
// The last prime 'p' such that p^2 + p^3 + P^4 < 50,000,000 is p=83 which gives 48036997.
// So all permutations of primes below and including 83 satisfies our conditions. 
// P(23, 3) = 10626
// Apart from these, we need to find the other possibilities when one prime is larger than the other. Eg. 83^2 + 2^3 + 2^4

