/* QUESTION: The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

ANSWER: 748317 (~10s)
*/

let sum = 0;
let count = 0;

function isPrime(n) {
    let i, prime = true;
    if (n === 1 || n === 0) {
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

function getTruncRight(n, ite) {
    return Number(n.toString().split('').slice(n.length, -ite).join(''));

}

function getTruncLeft(n, ite) {
    return Number(n.toString().split('').slice(ite).join(''));
}

function checkPrimeLeft(n) {
    if (getTruncLeft(n, 1) > 0) {
        if (!isPrime(n)) return false;
        return (isPrime(n) && checkPrimeLeft(getTruncLeft(n, 1)));
    } else {
        return isPrime(n);
    }
}

function checkPrimeRight(n) {
    if (getTruncRight(n, 1) > 0) {
        if (!isPrime(n)) return false;
        return (isPrime(n) && checkPrimeRight(getTruncRight(n, 1)));
    } else {
        return isPrime(n);
    }
}

for (let i = 10; i < 1000000 && count <= 11; i++) {
    if (checkPrimeLeft(i) && checkPrimeRight(i)) {
        console.log(i);
        sum += i;
        count++;
    }
}
console.log(sum, count);