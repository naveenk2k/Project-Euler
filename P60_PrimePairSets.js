/*
Question:
The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

Answer: 26033 (~6s)
*/

/*
Logic:
I actually solved it by generating the list of 4 primes (each less than 10000) that satisfy the given property (list given below) and then trying to append one more prime to the list that wouldn't break the property.
It's still a O(n^5) solution but runs faster than 6 seconds.

The solution given below is a direct brute force with 5 for-loops that runs in ~6 seconds.
*/

const primes = require('./Useful Programs/SieveOfEratosthenes')(10 ** 4);
const isPrime = require('./Useful Programs/PrimeTest');

const isPrimePair = (p1, p2) => {
    let p1p2 = Number(p1.toString() + p2.toString());
    let p2p1 = Number(p2.toString() + p1.toString());
    if (isPrime(p1p2) && isPrime(p2p1))
        return true;
    return false;
};

const isPrimePairSet = (currentPrimeList, newPrime) => {
    for (const prime of currentPrimeList) {
        if (!isPrimePair(prime, newPrime))
            return false;
    }
    return true;
};

const solution = () => {
    for (let i = 0; i < primes.length; i++) {
        const list = [primes[i]];
        for (let j = 0; j < primes.length; j++) {
            if (isPrimePairSet(list, primes[j])) {
                list.push(primes[j]);
                for (let k = 0; k < primes.length; k++) {
                    if (isPrimePairSet(list, primes[k])) {
                        list.push(primes[k]);
                        for (let l = 0; l < primes.length; l++) {
                            if (isPrimePairSet(list, primes[l])) {
                                list.push(primes[l]);
                                for (let m = 0; m < primes.length; m++) {
                                    if (isPrimePairSet(list, primes[m])) {
                                        list.push(primes[m]);
                                        console.log(list);
                                        console.log(list.reduce((acc, curr) => acc + curr, 0));
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

solution();

/* List of the set of four primes with the property:
[
    [3, 7, 109, 673],
    [7, 19, 97, 3727],
    [11, 23, 743, 1871],
    [19, 31, 181, 9679],
    [23, 47, 1481, 4211],
    [43, 97, 1381, 8521],
    [89, 107, 1061, 4973],
    [467, 587, 617, 6323],
    [1283, 1619, 4127, 7949],
    [3391, 3433, 3643, 6607],
    [3547, 3643, 5449, 9817],
    [5023, 5443, 6841, 7039],
    [5197, 5701, 6733, 8389],
    [6569, 6689, 6779, 8537]
]
*/
