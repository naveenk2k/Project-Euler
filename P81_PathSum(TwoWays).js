/* QUESTION: In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.
Find the minimal path sum, in matrix.txt (right click and "Save Link/Target As..."), a 31K text file containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.

ANSWER: 427337 (~1s)
*/

//Reading the file and storing the numbers as an array of contiguous elements (ignoring new lines)
let fs = require('fs');
let numbers = fs.readFileSync('/Users/naveen/Desktop/Naveen/Other/Programming/Project\ Euler/p081_matrix.txt', 'utf8').trim().split('\n');
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].split(',');
}
numbers = numbers.join().split(',').map(Number);

// Dynamic Programming with memoization

const rows = 80;
const cols = 80;
let matrix = [];

for (let i = 0; i < rows; i++) {
    matrix[i] = [];
}

//Making a 2D matrix from all the numbers
let k = 0;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = numbers[k];
        k++;
    }
}

for (let i = rows - 2, j = cols - 1; i >= 0; i--) {
    matrix[i][j] += matrix[i + 1][j];
}

for (let j = cols - 2, i = rows - 1; j >= 0; j--) {
    matrix[i][j] += matrix[i][j + 1];
}

for (let i = rows - 2; i >= 0; i--) {
    for (let j = cols - 2; j >= 0; j--) {
        matrix[i][j] += Math.min(matrix[i][j + 1], matrix[i + 1][j]);
    }
}

console.log(matrix[0][0]);