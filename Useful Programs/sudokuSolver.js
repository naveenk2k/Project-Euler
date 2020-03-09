// Logic from: https://www.codefellows.org/blog/sudoku-solver-from-scratch-in-javascript-tdd-style-a-tutorial/


// Tries all possibilities for a given cell and if it's valid, tries all possibilities for the next empty cell and so on. If at any point, we don't have any possible numbers for a cell, it backtracks to the previous cell and increments it to the next number, then repeat to try to find more valid numbers for the next cells.


/* Eg usage:
const sudokuSolver = require('./Useful Programs/sudokuSolver');
const grid = [
    [0, 0, 3, 0, 2, 0, 6, 0, 0],
    [9, 0, 0, 3, 0, 5, 0, 0, 1],
    [0, 0, 1, 8, 0, 6, 4, 0, 0],
    [0, 0, 8, 1, 0, 2, 9, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 6, 7, 0, 8, 2, 0, 0],
    [0, 0, 2, 6, 0, 9, 5, 0, 0],
    [8, 0, 0, 2, 0, 3, 0, 0, 9],
    [0, 0, 5, 0, 1, 0, 3, 0, 0]
]
const solution = sudokuSolver.solveGrid(grid);
*/


const saveEmptyPositions = grid => {
    let emptyPositions = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j] === 0)
                emptyPositions.push([i, j]);
        }
    }
    return emptyPositions;
};

// Checks if the value can be in the row of the grid
const checkRow = (grid, row, value) => {
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === value)
            return false;
    }
    return true;
};

// Checks if the value can be in the column of the grid
const checkCol = (grid, col, value) => {
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] === value)
            return false;
    }
    return true;
};

// Checks if the value can be in the box of the grid
const check3x3Grid = (grid, row, col, value) => {
    let boxStartRow = 0;
    let boxStartCol = 0;
    while (boxStartRow + 3 <= row) {
        boxStartRow += 3;
    }
    while (boxStartCol + 3 <= col) {
        boxStartCol += 3;
    }

    for (let i = boxStartRow; i < boxStartRow + 3; i++) {
        for (let j = boxStartCol; j < boxStartCol + 3; j++) {
            if (grid[i][j] === value)
                return false;
        }
    }
    return true;
}

// Checks if value in (row, col) of grid is a valid move
const checkValue = (grid, row, col, value) => {
    return (checkRow(grid, row, value) && checkCol(grid, col, value) && check3x3Grid(grid, row, col, value));
}

// Back-tracking algorithm to solve a sudoku
const solveGrid = grid => {
    const emptyPositions = saveEmptyPositions(grid);
    let row, col, found, value;
    for (let i = 0; i < emptyPositions.length;) {
        [row, col] = [emptyPositions[i][0], emptyPositions[i][1]];
        value = grid[row][col] + 1;
        found = false;
        while (!found && value <= 9) {
            if (checkValue(grid, row, col, value)) {
                found = true;
                grid[row][col] = value;
                i++;
            } else
                value++;
        }
        if (!found) {
            grid[row][col] = 0;
            i--;
        }
    }

    return grid;
}

module.exports.solveGrid = solveGrid;
