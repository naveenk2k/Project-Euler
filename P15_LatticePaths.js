/* QUESTION: Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?

ANSWER: 137846528820 (~3ms)
*/

console.time('time');
//A 20x20 grid has 21x21 nodes
let rows = 21;
let cols = 21;

//Creating the 2D grid
let grid = [];
for (let i = 0; i < rows; i++) {
    grid[i] = [];
}

//Number of ways to the bottom right cell from the bottom right cell is 0 (already there)
grid[rows - 1][cols - 1] = 0;

//Number of ways to the bottom right from cells in the right-most column is 1 (i.e go down)
for (let i = 0, j = cols - 1; i < rows - 1; i++) {
    grid[i][j] = 1;
}

//Number of ways to the bottom right from cells in the bottom-most row is 1 (i.e go right)
for (let j = 0, i = rows - 1; j < cols - 1; j++) {
    grid[i][j] = 1;
}

//For all other rows, the number of ways to the bottom right is the sum of the number of ways from the cell to the right and the number of ways from the cell below it
for (let i = rows - 2; i >= 0; i--) {
    for (let j = cols - 2; j >= 0; j--) {
        grid[i][j] = grid[i][j + 1] + grid[i + 1][j]
    }
}

//Finally, the total number of ways is the number of ways from the top left cell (i.e (0,0))
console.log(grid[0][0]);
console.timeEnd('time');