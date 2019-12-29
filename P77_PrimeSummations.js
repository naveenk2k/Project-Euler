/*
Question:
It is possible to write ten as the sum of primes in exactly five different ways:

7 + 3
5 + 5
5 + 3 + 2
3 + 3 + 2 + 2
2 + 2 + 2 + 2 + 2

What is the first value which can be written as the sum of primes in over five thousand different ways?

Answer: 71 (~7ms)
*/

// Logic: See the explanation for P76_CountingSummations and then read the changes below.

console.time('Time');

let primes = require('./Useful Programs/SieveOfEratosthenes')(500);

// I'm considering the 0th prime as 0. No real reason to do this except that it sounds better now since the first prime, i.e primes[1], is 2, and so on.
primes.unshift(0);

const size = 10 ** 2;
const target = 5000;

const solve = () => {
    // Initializing the DP table with 'null's
    const dp = Array(size).fill(0).map(x => Array(size).fill(null));

    // Filling the table with starting values:
    // 1 way to make 0 using the 0th prime (=0) along with any other prime
    for (let i = 0; i < size; i++)
        dp[i][0] = 1;

    // 0 ways to make any number > 0 using just the 0th prime (=0).
    // All even numbers can be made using the set {0, 2} but no odd number can.
    for (let j = 1; j < size; j++) {
        dp[0][j] = 0;
        dp[1][j] = (j % 2 == 0) ? 1 : 0;
    }

    // Regular coin-change DP solution where the set of coins is replaced with the set of primes; hence the 'j-primes[i]' in the 'else' block.
    // Also, I'm keeping track of the current minimum number that meets the target because the DP table is filled from left-to-right and then up-to-down.
    let minimum = Infinity;
    for (let i = 2; i < size; i++) {
        for (let j = 1; j < size; j++) {
            if (primes[i] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - primes[i]];
                if (dp[i][j] >= target && j < minimum)
                    minimum = j;
            }
        }
    }
    return minimum;
};

console.log(solve());
console.timeEnd('Time');