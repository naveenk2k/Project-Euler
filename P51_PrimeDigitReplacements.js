//http://mijkenator.github.io/2016/05/31/erlang-python-project-euler-51/

function getPrimes(limit) {
    //Sieve of Eratostenes
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

// Returns true if a number has duplicates, false if not
function hasDuplicates(num) {
    return (new Set(num.toString()).size != num.toString().length);
}

// console.log(getPrimes(1000000));

let primes = getPrimes(1000000).filter(hasDuplicates).filter(prime => prime > 1000);
console.log(primes.length, primes[0]);
console.log(primes);
// primes now contains all primes with duplicates such that each 1000 < prime < 1000000

// No logic yet

/*
function getReplacedNumber(num, replacement, positions) {
    //'replacement' is the number we want to replace in all the indexes part of array 'positions' in the original number 'num'
    num = num.toString().split('');
    for (const position of positions) {
        num[position] = replacement;
    }
    return Number(num.join(''));
}
*/