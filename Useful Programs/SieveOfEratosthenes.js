// Returns an array containing all the primes till n (Somewhat optimised)

// let n = 10 ** 6;

module.exports = (limit) => {
    let primes = Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;
    let primeNumbers = [];
    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
            for (let j = i; j < limit + 1; j += i) {
                primes[j] = false;
            }
        }
    }
    return primeNumbers;
};

// console.time('one');
// console.log(SieveOfEratosthenesArray(2));
// console.timeEnd('one');

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