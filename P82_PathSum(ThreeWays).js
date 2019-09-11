/* QUESTION:
NOTE: This problem is a more challenging version of Problem 81.

The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.

131, 673, 234, 103, 18
201, 96, 342, 965, 150
630, 803, 746, 422, 111
537, 699, 497, 121, 956
805, 732, 524, 37, 331

Find the minimal path sum, in matrix.txt(right click and "Save Link/Target As..."), a 31 K text file containing a 80 by 80 matrix, from the left column to the right column.
*/

// ANSWER: 260324 (~8ms)

console.time('time taken');

//Reading the file and storing the numbers in a 2D array
let fs = require('fs');
let numbers = fs.readFileSync('/Users/naveen/Desktop/Naveen/Other/Programming/Project\ Euler/p082_matrix.txt', 'utf8').trim().split('\n');
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].split(',').map(Number);
}

// Constants
const rows = 80;
const cols = 80;

// Creating a new 2D array to hold the answers.
// answer[i][j] = minimum cost of getting from numbers[i][j] to any cell in the rightmost column
let answer = [];
for (let i = 0; i < rows; i++) {
    answer[i] = [];
}

// Initialize answer array using following rule:
// Shortest distance from an element in the last column to anywhere in the last column is itself (cause it's already in the last column)
for (let i = 0; i < rows; i++)
    answer[i][cols - 1] = numbers[i][cols - 1];


// Pre-requisite NOTE: This logic works because all the numbers in the input are positive which means that if the minimal path for a cell (i, j) is to go upwards, then the minimal path for the cell above it (i-1, j) CAN'T be to go downwards

/*  Logic:
    STEPS:
 *  1. Start from the last but one column and start work our way back. After iterating column 'j', we have the minimal path sum to get from each cell of column 'j' to some element in the rightmost row (target).
 *  2. In each column, do the following:
 *      i. Self-impose the condition that we can only traverse right and up. Find the minimal path sum for all the cells in a particular column starting from the topmost and working our way down.
 *      ii. Self-impose the condition that we can only traverse down. Find the minimal path sum for all the cells in a particular column starting from the bottommost and working our way up.
 *  3. The minimal path sum of any column is the minimal value in that column in the answers array. Compute this minimal value.
 */

// STEP 1:
for (let j = cols - 2; j >= 0; j--) {

    // STEP 2 i. : Going down and checking up + right options

    // For first row, costOfCurrentCell = costOfGoingRight (as we can't go up)
    answer[0][j] = numbers[0][j] + answer[0][j + 1];
    // For all others, costOfCurrentCell = currentCellValue + min(costOfGoingUp, costOfGoingRight)
    for (let i = 1; i < rows; i++) {
        answer[i][j] = numbers[i][j] + Math.min(answer[i - 1][j], answer[i][j + 1]);
    }

    // STEP 2 ii. : Going up and checking down options as compared to previously found solution just above^

    // We can start from second last row because we've already found the best value for the bottom row as we can't go further down from there
    // For all others, costOfCurrentCell = min(costOfCurrentCell, currentCellValue + costOfGoingDown)
    for (let i = rows - 2; i >= 0; i--) {
        answer[i][j] = Math.min(answer[i][j], numbers[i][j] + answer[i + 1][j]);
    }
}

// STEP 3:
answer = Math.min(...answer.map(x => x[0]));
console.log(answer);

console.timeEnd('time taken');
