/* QUESTION: If we are presented with the first k terms of a sequence it is impossible to say with certainty the value of the next term, as there are infinitely many polynomial functions that can model the sequence.

As an example, let us consider the sequence of cube numbers. This is defined by the generating function,
un = n^3: 1, 8, 27, 64, 125, 216, ...

Suppose we were only given the first two terms of this sequence. Working on the principle that "simple is best" we should assume a linear relationship and predict the next term to be 15 (common difference 7). Even if we were presented with the first three terms, by the same principle of simplicity, a quadratic relationship should be assumed.

We shall define OP(k, n) to be the nth term of the optimum polynomial generating function for the first k terms of a sequence. It should be clear that OP(k, n) will accurately generate the terms of the sequence for n ≤ k, and potentially the first incorrect term (FIT) will be OP(k, k+1); in which case we shall call it a bad OP (BOP).

As a basis, if we were only given the first term of sequence, it would be most sensible to assume constancy; that is, for n ≥ 2, OP(1, n) = u1.

Hence we obtain the following OPs for the cubic sequence:

OP(1, n) = 1:	1, 1, 1, 1, ...
OP(2, n) = 7n−6:	1, 8, 15, ...
OP(3, n) = 6n^2−11n+6:     	1, 8, 27, 58, ...
OP(4, n) = n^3:	1, 8, 27, 64, 125, ...
Clearly no BOPs exist for k ≥ 4.

By considering the sum of FITs generated by the BOPs (indicated in red above), we obtain 1 + 15 + 58 = 74.

Consider the following tenth degree polynomial generating function:

un = 1 - n + n ^ 2 - n ^ 3 + n ^ 4 - n ^ 5 + n ^ 6 - n ^ 7 + n ^ 8 - n ^ 9 + n ^ 10

Find the sum of FITs for the BOPs.

ANSWER: 37076114526 (~3ms)
*/

/* LOGIC:
To calculate the next term in a sequence using differences, you just take the differences until it's a single value and then extrapolate the next term. For example:

1 8 27
 7 19
  12

Then 12 + 19 + 27 = 58, gives you the next FIT. Notice that the diagonal sums 1, 7 + 8, 12 + 19 + 27(1, 15, 58) are actually the FITs. Notice that each number in the difference tree is used once to calculate the final sum of 1 + 15 + 58 = 74.

This is like trying to find the next term in the list using differences. We take that the would-be next term is an incorrect term and hence we can add it to our list of FITs.

Therefore, if you just take the first 10 values of the polynomial in question and then their differences, you get:

    [1, 683, 44287, 838861, 8138021, 51828151, 247165843, 954437177, 3138105961, 9090909091]
    [682, 43604, 794574, 7299160, 43690130, 195337692, 707271334, 2183668784, 5952803130]
    [42922, 750970, 6504586, 36390970, 151647562, 511933642, 1476397450, 3769134346]
    [708048, 5753616, 29886384, 115256592, 360286080, 964463808, 2292736896]
    [5045568, 24132768, 85370208, 245029488, 604177728, 1328273088]
    [19087200, 61237440, 159659280, 359148240, 724095360]
    [42150240, 98421840, 199488960, 364947120]
    [56271600, 101067120, 165458160]
    [44795520, 64391040]
    [19595520]

The answer is simply the sum of the numbers above!
*/


console.time('time');

function getU(n) {
    return (1 - n + n ** 2 - n ** 3 + n ** 4 - n ** 5 + n ** 6 - n ** 7 + n ** 8 - n ** 9 + n ** 10);
    // return n ** 3;
}

//Initializing a matrix with 0s
let k = 10;
let grid = [];
for (let i = 0; i < k; i++) {
    grid.push(new Array(k).fill(0));
}

//Calculating the initial values of the bottom-most row. These are the values of the given function at n = 1, 2, 3...
for (let i = k - 1, j = 0; j < k; j++) {
    grid[i][j] = getU(j + 1);
}

//Calculating the next values from bottom two values' differences
for (let i = k - 2; i >= 0; i--) {
    for (let j = 0; j < i + 1; j++) {
        grid[i][j] = grid[i + 1][j + 1] - grid[i + 1][j];
    }
}


//Summing over all numbers in the grid
let sum = 0;

for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
        sum += grid[i][j];
    }
}
console.log(sum);
console.timeEnd('time');

// console.log(grid);

/*
1
683
44287
838861
8138021
51828151
247165843
954437177
3138105961
*/