/* QUESTION: The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

ANSWER: 55 (~12s)
*/

console.time('Time')

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

function getRotations(n) {
    let rotArray = [];
    rotArray.push(n);
    for (let i = 0; i < n.toString().length - 1; i++) {
        let current = rotArray[rotArray.length - 1];
        let numArr = Array.from(current.toString());
        if (current.toString().length < n.toString().length) {
            numArr.push('0');
        } else {
            let first = numArr.shift();
            numArr.push(first);
        }
        let x = numArr.join('');
        rotArray.push(Number(x));
    }
    return rotArray;
}

let count = 0;

for (let i = 2; i < 1000000; i++) {
    let rotPrime = true;
    let rotations = getRotations(i);
    for (let el of rotations) {
        let result = isPrime(el);
        if (!result) {
            rotPrime = false;
            break;
        }
    }
    if (rotPrime) {
        count++;
    }

}

console.log(count);
console.timeEnd('Time')