/* QUESTION: Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?

Answer: 26241 (1.2s)
*/

let diagArray = [1];
let primeCount = 0;

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

for (let layer = 2; layer < 100000; layer++) {

    let sideLength = 2 * layer - 1;

    //Formulae for finding elements added at each layer from lowest to highest while going anticlockwise
    let c1 = (4 * layer * layer) - (10 * layer) + 7;
    let c2 = (4 * layer * layer) - (8 * layer) + 5;
    let c3 = (4 * layer * layer) - (6 * layer) + 3;
    let c4 = (4 * layer * layer) - (4 * layer) + 1

    diagArray.push(c1);
    diagArray.push(c2);
    diagArray.push(c3);
    diagArray.push(c4);

    if (isPrime(c1)) primeCount++;
    if (isPrime(c2)) primeCount++;
    if (isPrime(c3)) primeCount++;
    if (isPrime(c4)) primeCount++;

    let primeRatio = (primeCount / diagArray.length) * 100;
    if (primeRatio < 10) {
        console.log(sideLength, primeRatio);
        break;
    }
}