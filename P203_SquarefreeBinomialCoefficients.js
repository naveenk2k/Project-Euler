/* QUESTION: The binomial coefficients nCk can be arranged in triangular form, Pascal 's triangle, like this:

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
.........

It can be seen that the first eight rows of Pascal 's triangle contain twelve distinct numbers: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 and 35.

A positive integer n is called squarefree if no square of a prime divides n.Of the twelve distinct numbers in the first eight rows of Pascal 's triangle, all except 4 and 20 are squarefree. The sum of the distinct squarefree numbers in the first eight rows is 105.

Find the sum of the distinct squarefree numbers in the first 51 rows of Pascal 's triangle.

ANSWER: 34029210557338 (~2.7s)
*/

let pascal = [];
let distinct = new Set([1]);
let dimension = 51;
let sum = 0;


// Creating Pascal's Triangle
for (let i = 0; i < dimension; i++) {
    pascal[i] = [];
}

for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
        if (i == j) {
            pascal[i][i] = 1;
        }
    }
}

for (let i = 0; i < dimension; i++) {
    pascal[i][0] = 1;
}

//Generating the values of Pascal's triangle and storing the unique ones seperately
for (let i = 2; i < dimension; i++) {
    for (let j = 1; j < i; j++) {
        pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        distinct.add(pascal[i][j]);
    }
}

function isPrime(n) {
    if (!Number.isInteger(n)) return false;
    if (n == 2) {
        return true;
    } else if (n <= 1 || n % 2 == 0) {
        return false; //1 isn't prime
    } else {
        let limit = Math.sqrt(n);
        for (let i = 3; i <= limit; i += 2) { //checking all numbers less than sqrt(n) for factors
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function getProperDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                divisors.push(i);
            } else {
                divisors.push(i);
                divisors.push(n / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}

// A number is squarefree is none of its factors is a square of a prime
function isSquarefree(n) {
    let factors = getProperDivisors(n);
    for (let factor of factors) {
        if (isPrime(Math.sqrt(factor))) {
            return false;
        }
    }
    return true;
}

for (let n of distinct) {
    if (isSquarefree(n)) sum += n;
}

console.log(sum);