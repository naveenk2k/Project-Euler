/* Logic-
Generate a bunch of primes.
Create all combinations of their sums when taken 2 at a time, 3 at a time, 4 at a time, etc.
When we generate any number by summing primes, increment the counter for the number of ways it's possible to form that number.
The number which hits 500 first is our answer.

Need to debug because we're getting the wrong answer
*/

let primes = require('./Useful Programs/SieveOfEratosthenes')(500);



let count = [];

function getAnswer() {
    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            let index = primes[i] + primes[j];
            if (count[index] === undefined) {
                count[index] = 0;
            }
            count[index]++;
            if (count[index] >= 5000) {
                console.log('FOUND at ' + index + count[index]);

                return;

            }
        }
    }


    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            for (let k = j; k < primes.length; k++) {
                let index = primes[i] + primes[j] + primes[k];
                if (count[index] === undefined) {
                    count[index] = 0;
                }
                count[index]++;
                if (count[index] >= 5000) {
                    console.log('FOUND at ' + index + count[index]);

                    return;

                }
            }
        }
    }

    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            for (let k = j; k < primes.length; k++) {
                for (let l = k; l < primes.length; l++) {
                    let index = primes[i] + primes[j] + primes[k] + primes[l];
                    if (count[index] === undefined) {
                        count[index] = 0;
                    }
                    count[index]++;
                    if (count[index] >= 5000) {
                        console.log('FOUND at ' + index + count[index]);

                        return;
                    }
                }
            }
        }
    }

    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            for (let k = j; k < primes.length; k++) {
                for (let l = k; l < primes.length; l++) {
                    for (let m = l; m < primes.length; m++) {
                        let index = primes[i] + primes[j] + primes[k] + primes[l] + primes[m];
                        if (count[index] === undefined) {
                            count[index] = 0;
                        }
                        count[index]++;
                        if (count[index] >= 5000) {
                            console.log('FOUND at ' + index + count[index]);


                            return;
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            for (let k = j; k < primes.length; k++) {
                for (let l = k; l < primes.length; l++) {
                    for (let m = l; m < primes.length; m++) {
                        for (let n = m; n < primes.length; n++) {
                            let index = primes[i] + primes[j] + primes[k] + primes[l] + primes[m] + primes[n];
                            if (count[index] === undefined) {
                                count[index] = 0;
                            }
                            count[index]++;
                            if (count[index] >= 5000) {
                                console.log('FOUND at ' + index + count[index]);

                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            for (let k = j; k < primes.length; k++) {
                for (let l = k; l < primes.length; l++) {
                    for (let m = l; m < primes.length; m++) {
                        for (let n = m; n < primes.length; n++) {
                            for (let o = n; o < primes.length; o++) {
                                let index = primes[i] + primes[j] + primes[k] + primes[l] + primes[m] + primes[n] + primes[o];
                                if (count[index] === undefined) {
                                    count[index] = 0;
                                }
                                count[index]++;
                                if (count[index] >= 5000) {
                                    console.log('FOUND at ' + index + count[index]);
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

getAnswer();

/*
function isPrime(n) {
    if (n <= 1) {
        return false; //1 isn't prime
    } else if (n == 2 || n == 3) {
        return true;
    } else if (n % 2 == 0 || n % 3 == 0) {
        return false;
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

//Logic is wrong - only counts sum of 2 individual numbers to give another number but this is not true: 10 = 2 + 2 + 2 + 2 + 2, 5 + 5, etc. The number of numbers is not known
let ways = [0, 1, 1, 1];

function getWays(n) {
    if (ways[n]) {
        return ways[n];
    } else if (isPrime(n)) {
        ways[n] = 1;
        return 1;
    } else {
        let sum = 0;
        for (let i = 1; i <= n / 2; i++) {
            if (isPrime(i) && isPrime(n - i)) {
                if (i != n - i) {
                    sum += getWays(i) + getWays(n - i);
                } else {
                    sum += getWays(i);
                }
            }
        }
        ways[n] = sum;
        return ways[n];
    }
}

console.log(getWays(8));
console.log(ways);
*/