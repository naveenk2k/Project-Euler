const sieve = require('./Useful Programs/SieveOfEratosthenes');
const getDivisors = require('./Useful Programs/AllFactors').getProperDivisors;
const isPrime = require('./Useful Programs/PrimeTest');

const limit = 10 ** 7;
const primes = sieve(limit);

const binarySearch = (arr, x) => {

    let start = 0,
        end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True
        if (arr[mid] === x) return true;

        // Else look in left or right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
}


const satisfies = n => {
    const factors = getDivisors(n);
    const halfFactors = factors.slice(0, Math.ceil(factors.length / 2));
    for (const factor of halfFactors.slice(2, )) {
        // if (!binarySearch(primes, (factor + n / factor))) {
        //     return false;
        // }
        if (!isPrime((factor + n / factor))) {
            return false;
        }
    }
    return true;
};

let sum = 0;

for (let i = 2; i <= limit; i+=4) {
    if (isPrime(i + 1) && isPrime(2 + i / 2) && satisfies(i)) {
        sum += i;
    }
}

console.log(sum);

//27814470276 till 10^7 in 4.5s
// 1739023853136 till 10^8 in 99s but this is wrong