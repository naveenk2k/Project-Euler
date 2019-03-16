/* QUESTION: The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

Answer: 296962999629 (1.5s)
*/

let primes = [];

function isPrime(n) {
    let i, prime = true;
    if (n === 1) {
        return false;
    } else {
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            return true;
        } else {
            return false;
        }
    }
}

for (let i = 1001; i < 9999; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

let apPrimes = [];

//Finding numbers in AP
for (let i = 0; i < primes.length; i++) {
    let d1, d2;
    for (let j = i + 1; j < primes.length; j++) {
        d1 = primes[j] - primes[i];
        for (let k = j + 1; k < primes.length; k++) {
            d2 = primes[k] - primes[j]
            if (d1 === d2) {
                apPrimes.push([primes[i], primes[j], primes[k]]);
            }
        }
    }
}

console.log(apPrimes);

//Checking if the numbers are permutations of each other
for (let set of apPrimes) {
    if (set[0].toString().split('').sort().toString() === set[1].toString().split('').sort().toString() && set[0].toString().split('').sort().toString() === set[2].toString().split('').sort().toString()) {
        console.log(set[0], set[1], set[2]);
    }
}


// for (let num of primes) {
//    let count = 0;
//    let duplicates = [];
//    let pnum = Combinatorics.permutation(num.toString().split(''));
//    for (let n of pnum.toArray()) {
//       if (primes.includes(Number(n.join('')))) {
//          count++;
//          duplicates.push(Number(n.join('')));
//       }
//    }
//    if (count === 3) {
//       console.log(duplicates);
//    }
// }