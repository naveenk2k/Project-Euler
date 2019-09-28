// !Doesn't work

/* Tried to look for all primes and split them and if their parts are also primes, incremented that value.
Eg. 1097 can be split at 1 & 097, 10 & 97, 109 & 7.
In the last combination, both are primes, so incremented the count for 109 and 7. And if this is equal to 4 for 4 different numbers, we have found answer.
But this doesn't work cause it could be incremented for numerous cases and we won't know about it.
Eg 23 will increment 2 and 3.
73 will increment 3, and so. So 3 will have many many values but they won't be connected in any way.
Find better logic
*/

const primes = require('./Useful Programs/SieveOfEratosthenes')(1000000);
const isPrime = require('./Useful Programs/PrimeTest');


const count = [];

const checkPrimeSubstrings = (number) => {
    for (let i = 1; i < number.toString().length; i++) {
        const part1 = Number(number.toString().slice(0, i));
        const part2 = Number(number.toString().slice(i));
        if (isPrime(part1) && isPrime(part2)) {
            if (!count[part1])
                count[part1] = 0;
            if (!count[part2])
                count[part2] = 0;

            count[part1]++;
            count[part2]++;
            // console.log(number, part1, part2);
        }
    }
};

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

const allPossiblePrimes = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && !isPrime(Number(arr[i].toString() + arr[j].toString()))) {
                return false;
            }
        }
    }
    return true;
};


for (const prime of primes) {
    checkPrimeSubstrings(prime);
    if (getOccurrence(count, 4) === 4) {
        const answer = count.reduce((arr, x, index) => {
            if (x === 4)
                arr.push(index);
            return arr;
        }, []);

        if (allPossiblePrimes(answer)) {
            console.log(answer);
            break;
        }
    }
}

// console.log(count);
