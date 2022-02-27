/*
Question:
https://projecteuler.net/problem=117

ANSWER: 100808458960497 (~10ms)
*/

/*
Logic:
Dynamic Programming

Let f(n) : number of ways to tile a row size 'n' using grey tiles (measuring 1 unit), red tiles (measuring two units), green tiles (measuring three units), and blue tiles (measuring four units).

Then, we can tile a row of size 'n' in the following ways:
    1. Starting with a tiling of a row size 'n-1', we can append a grey tile.
    2. Starting with a tiling of a row size 'n-2', we can append a red tile.
    3. Starting with a tiling of a row size 'n-3', we can append a green tile.
    4. Starting with a tiling of a row size 'n-4', we can append a blue tile.

Combining these, we can tile a row size 'n' in
    f(n) = f(n-1) + f(n-2) + f(n-3) + f(n-4) ways. 
Here,   f(0) = 1 because there's only 1 way to tile no a row of size 0,
and     f(n) = 0 for all n<0 because it is not possible to tile negative sized rows. 

*/

console.time('Time');

const combinatorics = require('./combinatorics');

const n = 50;
const dp = new Array(n + 1);

dp[0] = 1;
// These values were explicitly calculated based on the recurrence formula above.
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4];
}


console.log(dp[n]);
console.timeEnd('Time');