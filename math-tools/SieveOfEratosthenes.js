// Returns an array containing all the primes till n (Somewhat optimised)

// let n = 10 ** 6;
const SieveOfEratosthenes = (limit) => {
    let primes = Array(limit + 1).fill(true);
    // primes[0] = primes[1] = false;
    let primeNumbers = [];
    for (let i = 2; i < limit + 1; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
            for (let j = i; j < limit + 1; j += i) {
                primes[j] = false;
            }
        }
    }
    return primeNumbers;
};

/*
ALGORITHM Sieve(n)
    for i<-2 to n+1
        primes[i] = 1;

    k<-0
    for i<-2 to n+1
        if primes[i]
            primeNumbers[k] = i
            j<-i
            while j < n+1
                primes[j] = 0
                j<-(j + i)

    return primeNumbers
*/

const sieve2 = n => {
    let A = Array(n).fill(true);
    for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
        if (A[i]) {
            let j = i * i;
            while (j <= n) {
                A[j] = false;
                j += i;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (A[i])
            primes.push(i);
    }
    return primes;
};

module.exports = SieveOfEratosthenes;

// const limit = 22;

// console.time('one');
// console.log(SieveOfEratosthenes(limit));
// console.timeEnd('one');
// console.time('two');
// sieve2(limit);
// console.timeEnd('two');

// function rangePrime(n) {
//     let primes = Array(n).fill(true);
//     primes[0] = primes[1] = false;
//     let res = [];
//     let p = 2;
//     while (p * p <= n) {
//         if (primes[p] === true) {
//             res.push(p);
//             for (let i = p * p; i < n + 1; i += p) {
//                 primes[i] = false;
//             }
//         }
//         p += 1;
//     }
//     return primes;
// }

// console.time('two');
// rangePrime(n);
// console.timeEnd('two');