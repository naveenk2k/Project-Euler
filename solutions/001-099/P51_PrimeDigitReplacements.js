/* QUESTION: 
By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

Answer: 121313 (0.13s)


Logic:
1. Start with primes from the sieve. 
2. Collect all primes that have repeated digit of 0, 1 or 2. Eg. 6211 has repeated 1s. 
   The reason for this filtering is that I am only interested in the 1st member of the prime family of size 8 and hence the lowest possible repeated digit must be 0, 1 or 2 (to allow for 8 replacements). 
3. For each such possible starting number, generate other members of the family and check for primality. Stop when family size of 8 is reached.
*/

const sieve = require('../../math-tools/SieveOfEratosthenes');
const isPrime = require('../../math-tools/PrimeTest');
const limit = 10 ** 6;
const requiredPrimeFamilySize = 8;

let primes = sieve(limit);

//   Takes input like (6211, 1) and generates all other LARGER family numbers such as 6222, 6233, 6244, 6255, 6266, 6277, 6288, 6299. Note that I don't generate 6200 because if it existed, that would have been the first member of the prime family. 
const findPrimeFamily = (prime, repeatedValue) => {
    let familySize = 1; // initial prime counts as 1
    const primeFamily = [prime];

    // console.log(`Initial prime: ${prime}, replacing ${repeatedValue}`);

    for (let newValue = repeatedValue + 1; newValue <= 9; ++newValue) {
        // replace all occurrences of repeatedValue in the number 'prime' with newValue
        let replacedNumber = Number(prime.toString().replaceAll(repeatedValue, newValue));
        // console.log(`New value: ${replacedNumber}`);
        if (isPrime(replacedNumber)) {
            familySize++;
            primeFamily.push(replacedNumber);
        }

        if (familySize == requiredPrimeFamilySize) {
            console.log(`Found prime family: ${primeFamily}`);
            return true;
        }
    }

    return false;
};

// returns frequences of 0, 1 or 2 in a number.
const get012Frequencies = prime => {
    const freq = [0, 0, 0]; // freq of 0, 1, and 2
    while (prime) {
        const lastDigit = prime % 10;
        if (lastDigit === 0 || lastDigit === 1 || lastDigit === 2) {
            freq[lastDigit] = (freq[lastDigit] || 0) + 1;
        }
        prime = Math.trunc(prime / 10);
    }

    return freq;
}

const aggregate012Duplicates = primes => {
    const result = {}

    for (const prime of primes) {
        const freq = get012Frequencies(prime);
        freq.forEach((f, idx) => {
            if (f > 1) (result[prime] ??= []).push(idx);
        });
    }

    return result;
}

const solve = () => {
    const primesWithDuplicates = aggregate012Duplicates(primes);
    for (const prime in primesWithDuplicates) {
        for (const duplicateDigit of primesWithDuplicates[prime]) {
            if (findPrimeFamily(prime, duplicateDigit)) {
                console.log(prime);
                return;
            }
        }
    }

    console.log("No prime family found");
}

solve();
