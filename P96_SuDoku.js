/* QUESTION: SuDoku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of SuDoku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9.

A well constructed SuDoku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ "guess and test" methods in order to eliminate options(there is much contested opinion over this).The complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can be solved by straight forward direct deduction.

The 6 K text file, sudoku.txt(right click and 'Save Link/Target As...'), contains fifty different SuDoku puzzles ranging in difficulty, but all with unique solutions(the first puzzle in the file is the example above).

By solving all fifty puzzles find the sum of the 3 - digit numbers found in the top left corner of each solution grid;
for example, 483 is the 3 - digit number found in the top left corner of the solution grid above.

ANSWER: 24702 (~300ms)
*/

console.time('Time');

const fs = require('fs');
const sudokuSolver = require('./Useful Programs/sudokuSolver');

// Parsing the sudoku grids as a array of 2D grids
const file = fs.readFileSync("p096_sudoku.txt", 'utf8');
const lines = file.split('\n');
let grids = [];
for (let i = 0; i < lines.length; i += 10) {
    grids.push(lines.slice(i, i + 10));
}
grids = grids.map(grid => {
    grid.shift();
    grid = grid.map(line => line.split('').map(Number));
    return grid;
});


let answer = 0;
for (const grid of grids) {
    const solution = sudokuSolver.solveGrid(grid);
    answer += Number(solution[0][0].toString() + solution[0][1].toString() + solution[0][2].toString());
}
console.log(answer);

console.timeEnd('Time');
