const primes = require('./Useful Programs/SieveOfEratosthenes')(1000);
const isPrime = require('./Useful Programs/PrimeTest');
const Combinatorics = require('./combinatorics');

const isPrimePair = (p1, p2) => {
    let p1p2 = Number(p1.toString() + p2.toString());
    let p2p1 = Number(p2.toString() + p1.toString());
    if (isPrime(p1p2) && isPrime(p2p1))
        return true;
    return false;
};

const isPrimePairSet = primes => {
    let combinations = Combinatorics.combination([...primes], 2);
    let a;
    while ((a = combinations.next()) != null) {
        if (!isPrimePair(...a))
            return false;
    }
    return true;
};
