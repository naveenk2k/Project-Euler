// DP doesn't work because the array size gets insanely large
// Use Euler's formula

const size = 10 ** 3;
// const size = 6;

const solve = size => {
    const dp = Array(size).fill(0).map(x => Array(size).fill(null));

    for (let j = 1; j < size; j++)
        dp[0][j] = 0;

    for (let i = 0; i < size; i++)
        dp[i][0] = 1;

    for (let i = 1; i < size; i++) {
        for (let j = 1; j < size; j++) {
            if (i > j)
                dp[i][j] = dp[i - 1][j];
            else
                dp[i][j] = (dp[i - 1][j] + dp[i][j - i]);

            if (dp[i][j] % (10 ** 6) === 0) {
                console.log('here', dp[i][j], j);
                return [j];
            }
        }
    }

    // console.table(dp);
    return dp[size - 1][size - 1];
};


console.log(solve(size));