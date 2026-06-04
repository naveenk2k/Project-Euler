/*
Question:
It is possible to write five as a sum in exactly six different ways:
    4 + 1
    3 + 2
    3 + 1 + 1
    2 + 2 + 1
    2 + 1 + 1 + 1
    1 + 1 + 1 + 1 + 1

How many different ways can one hundred be written as a sum of at least two positive integers?

ANSWER: 190569291 (~5ms)
*/

console.time('Time');

const size = 101;

/*
 *  Logic:
 *  Calculate the DP solution for the usual coin change problem then subtract 1 as this question species we need a sum of at least two positive integers (can't have 4 = 4 + 0)
 *
 *  Rows = Cumulative Denominations
 *      Eg. Row 0 = {0}
 *          Row 1 = {0, 1} coins allowed
 *          Row 2 = {0, 1, 2} coins allowed
 *
 *  Columns = Values
 *      Eg. Column 0 = Need to from a sum of 0
 *          Column 1 = Need to form a sum of 1
 *          Column 2 = Need to form a sum of 2
 *
 *  Value at cell dp[i][j] = # of ways to form a sum of 'j' using denominations {1, 2, 3, ..., i}
 *      Eg. dp[i][0] = 1 for all i>=0; a sum of 0 can be formed using any number of coins in only one way (by not using them)
 *              dp[0][0] = 1; a sum of zero can be formed using a coin of denomination zero in exactly one way (use 0)
 *              dp[0][1] = 1; 0 can be formed using {0, 1} in one way (use just 0)
 *
 *          dp[0][j] = 0 for all j>0; we can't form any positive integer using only 0s
 *
 *          dp[1][4] = 1; 4 = 1+1+1+1
 *          dp[2][4] = 3; 4 = 1+1+1+1, 2+1+1, 2+2
 *          dp[3][4] = 4; 4 = 1+1+1+1, 2+1+1, 2+2, 3+1
 *          dp[4][4] = 5; 4 = 1+1+1+1, 2+1+1, 2+2, 3+1, 4+0
 *          dp[i][4] = 5 for all j>=4 because we can form 4 using denominations {1, 2, 3, 4} only.
 *                       Having a coin of denomination 5 or 7 won't help us form 4.
 *
 */

const dp = Array(size).fill(0).map(x => Array(size).fill(null));

// 0 ways to make 1, 2, 3, etc. using {0}
for (let i = 1; i < size; i++)
    dp[0][i] = 0;

/*  1 way to make 0 using {0} (use only the hypothetical value of 0),
 *  1 way to make 0 using {0, 1},
 *  1 way to make 0 using {0, 1, 2},
 *  .
 *  .
 *  .
 *  etc.
 */
for (let i = 0; i < size; i++)
    dp[i][0] = 1;

/*
 * For the others,
 *  # of ways to make x using coins {0, 1, 2, ..., n - 1, n}
 *          = # of ways to make x using {0, 1, 2, n - 1} + # of ways to make (x - n) using {0, 1, 2, ..., n - 1, n}
 *
 *  We have the option of either including (at least 1 coin of) the current denomination 'n' in which case the remaining amount is (x - n) which we now need to form using {0, 1, 2, ..., n}, or we exclude 'n' in which case we need to form the whole amount 'x' using only coins of lower denominations ({0, 1, 2, ..., n - 1}).
 *
 */
for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
        if (i > j)
            dp[i][j] = dp[i - 1][j];
        else
            dp[i][j] = dp[i - 1][j] + dp[i][j - i];
    }
}

// Can't have x = x as one of the partitions as it needs to be a sum here (x = a + b form); so subtract this one partition which got included
const answer = dp[size - 1][size - 1] - 1;

// console.table(dp);
console.log(answer);
console.timeEnd('Time');
