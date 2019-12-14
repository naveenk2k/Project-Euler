//http://mijkenator.github.io/2016/05/31/erlang-python-project-euler-51/

// Doesn't scale after 10**6

const sieve = require('./Useful Programs/SieveOfEratosthenes');
const isPrime = require('./Useful Programs/PrimeTest');
const limit = 10 ** 6;
const primeValueFamily = 7;

let primes = sieve(limit).filter(p => p > 10 ** 4);


const maxPrimeFamilySize = (prime, index1, index2) => {
    let familySize = 0;
    for (let i = 0; i < 10; i++) {
        let replacedNumber = prime.toString();
        replacedNumber = replacedNumber.substr(0, index1) + i.toString() + replacedNumber.substr(index1 + 1);
        replacedNumber = replacedNumber.substr(0, index2) + i.toString() + replacedNumber.substr(index2 + 1);
        replacedNumber = Number(replacedNumber);
        if (isPrime(replacedNumber))
            familySize++;
    }
    return familySize;
};

const isPrimeFamily = (prime, value) => {
    const length = prime.toString().length;
    for (let i = 1; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            if (maxPrimeFamilySize(prime, i, j) === value) {
                return true;
            }
        }
    }
    return false;
};

const solve = () => {
    for (const prime of primes) {
        if (isPrimeFamily(prime, primeValueFamily)) {
            console.log(prime);
            break;
        }
    }
};

solve();
