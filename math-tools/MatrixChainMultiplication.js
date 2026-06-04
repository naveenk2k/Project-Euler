// Dynamic Programming Solution

/* QUESTION: Given a chain of 'n' matrices, [A1, A2, A3, ..., An], where for i = 1, 2, 3, ..., n, matrix Ai has dimension (P(i-1) x Pi), fully parenthesize the product A1A2A3...An in such a way that minimizes the number of scalar multiplications.
 */

// Best explanation: https://www.youtube.com/watch?v=GMzVeWpyTN0
// GeeksForGeeks Website: https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/

// Takes a chain of matrices to multiply, p: [4, 10, 3, 12, 20, 7]
// So the individual matrices are: (4x10), (10x3), (3x12), (12x20), (20x7)
const getMinimumMatrixChainMultiplicationCost = (p) => {
    const n = p.length;

    /* Declare an empty nxn grid to store values of the cost 'm'. This is our solution grid.
    m[i][j] = Minimum cost of multiplying matrices Ai through Aj where i, j >= 1
    Final answer = m[1][n] because we want the minimum cost of multiplying ALL the matrices of 'p' together.
    */
    let m = Array.from(Array(n), () => Array(n));

    /* Declare an empty nxn grid such that each entry s[i][j] records a value of k such that an optimal parenthesization of AixA(i+1)x...xAj splits the product between Ak and A(k+1).
     */
    let s = Array.from(Array(n), () => Array(n));

    // NOTE: I am taking the case of 'only 1 matrix' as a chain of length zero (because there is no 'chain', which was intuitive to me and also because I thought of filling up grid 'm' in layers (l = 0, 1, 2, ...)). This makes the bounds of the loops 'nicer' 💯
    // But most solutions and the CLRS book take this as a chain of length 1 (also pretty intuitive). Now the bounds have a '-1' everywhere (ugly)

    // Base cases (when chain length = 0, cost = 0, i.e. when we only have one matrix, the cost to multiply it is 0)
    // Starts from 1 because we can only consider matrices 1 through n and the first matrix is A1
    for (let i = 1; i < n; i++) {
        m[i][i] = 0;
    }

    // For greater chain lengths (l = 1, 2, 3,...)
    for (let l = 1; l < n; l++) {
        for (let i = 1; i < (n - l); i++) {
            const j = i + l;
            m[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                const currentCost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (currentCost < m[i][j]) {
                    m[i][j] = currentCost;
                    s[i][j] = k;
                }
            }
        }
    }

    printOptimalMatrixChainParenthesization(s, 1, n - 1);
    console.log();
    // console.table(m);
    // console.table(s);
    return m[1][n - 1];
}

const printOptimalMatrixChainParenthesization = (s, i, j) => {
    if (i === j)
        process.stdout.write(`A${i}`);
    // console.log(`A${i}x`);
    else {
        process.stdout.write('(');
        printOptimalMatrixChainParenthesization(s, i, s[i][j]);
        printOptimalMatrixChainParenthesization(s, s[i][j] + 1, j);
        process.stdout.write(')');
    }
}

console.log(getMinimumMatrixChainMultiplicationCost([4, 10, 3, 12, 20, 7]));