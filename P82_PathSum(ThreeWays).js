//NOTE: Below logic is wrong. (note2)


//Reading the file and storing the numbers as an array of contiguous elements (ignoring new lines)
let fs = require('fs');
let numbers = fs.readFileSync('/Users/naveen/Desktop/Naveen/Other/Programming/Project\ Euler/p082_matrix.txt', 'utf8').trim().split('\n');
// let numbers = fs.readFileSync('/Users/naveen/Desktop/Naveen/Other/Programming/Project\ Euler/trial82.txt', 'utf8').trim().split('\n');
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].split(',');
}
numbers = numbers.join().split(',').map(Number);

//Function to look for elements in a nested array (Basically Array.includes(val) but works for nested arrays)



// let numbers = [
//     131, 673, 234, 103, 18,
//     201, 96, 342, 965, 150,
//     630, 803, 746, 422, 111,
//     537, 699, 497, 121, 956,
//     805, 732, 524, 37, 331
// ];

// let numbers = [
//     5, 56, 100, 20, 30,
//     16, 96, 342, 65, 32,
//     20, 80, 746, 422, 111,
//     45, 80, 34, 50, 12,
//     80, 32, 24, 37, 90
// ];

const rows = cols = 80;
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
//matrix contains all the numbers as a 2D matrix.

// NOTE: For each element in the last column, work your way back by going left, up or down and choosing the minimum sum out of those options. At the end, compare which minimum sum is the lowest to get the over all answer.
let overallMinimum = 1000000; //large to make sure none of the values are greater than this limit
for (let k = 0; k < 1; k++) {
    let i = k;
    let j = cols - 1;
    let visited = [];
    let visitedValues = [];
    // matrix[i][cols - 1] represents the elements in the last column (this is the starting position)
    //For each ending cell in the right-most column, calculate the minimum cost to get there
    let currentMinimum = matrix[i][j];
    visited.push([i, j].join(','));
    visitedValues.push(matrix[i][j]);
    //The only move is left
    j = j - 1;
    let reachedColumnOne = false;
    //Code to traverse backwards from the last column's cell
    while (!reachedColumnOne) {
        // console.log(i, j);
        currentMinimum += matrix[i][j];
        visited.push([i, j].join(','));
        visitedValues.push(matrix[i][j]);

        // console.log(visited);
        if (j == 0) {
            reachedColumnOne = true;
            // console.log(currentMinimum, visited);
            // currentMinimum = 10 ** 7;
            break;
        }
        [i, j] = getNextPosition(i, j, visited);
        //Can't repeat elements, i.e go over the same value more than once
        if (visited.includes(i.toString() + ',' + j.toString())) {
            // reachedColumnOne = false;
            break;
        }
    }
    if (currentMinimum < overallMinimum && reachedColumnOne) {
        overallMinimum = currentMinimum;
    }
    // console.log(visited);
    console.log(visitedValues);
}



function getNextPosition(r, c, invalidIndexes) {
    //the left one if it's exactly to the right of first column (to minimize number of things we add)
    if (c == 1) return [r, 0];
    if (r <= 0) {
        //If top row, check only down and left
        if (matrix[r + 1][c] >= matrix[r][c - 1] && !invalidIndexes.includes(r.toString() + ',' + (c - 1).toString())) {
            return [r, c - 1];
        } else if (!invalidIndexes.includes((r + 1).toString() + ',' + (c).toString())) {
            return [r + 1, c];
        } else return [r, c];
    } else if (r >= rows - 1) {
        //If bottom row, check only top and left
        if (matrix[r - 1][c] >= matrix[r][c - 1] && !invalidIndexes.includes(r.toString() + ',' + (c - 1).toString())) {
            return [r, c - 1];
        } else if (!invalidIndexes.includes((r - 1).toString() + ',' + (c).toString())) {
            return [r - 1, c];
        } else return [r, c];
    } else {
        //If anywhere in between
        //Case 1: Top cell is lowest
        if (matrix[r - 1][c] <= matrix[r + 1][c] && matrix[r - 1][c] <= matrix[r][c - 1]) {
            if (!invalidIndexes.includes((r - 1).toString() + ',' + (c).toString())) {
                return [r - 1, c];
            } else if (matrix[r + 1][c] <= matrix[r][c - 1] && !invalidIndexes.includes((r + 1).toString() + ',' + c.toString())) {
                return [r + 1, c];
            } else if (!invalidIndexes.includes((r).toString() + ',' + (c - 1).toString())) {
                return [r, c - 1];
            } else return [r, c];
        }
        //Case 2: Bottom cell is lowest
        if (matrix[r + 1][c] <= matrix[r - 1][c] && matrix[r + 1][c] <= matrix[r][c - 1]) {
            if (!invalidIndexes.includes((r + 1).toString() + ',' + c.toString())) {
                return [r + 1, c];
            } else if (matrix[r - 1][c] <= matrix[r][c - 1] && !invalidIndexes.includes((r - 1).toString() + ',' + c.toString())) {
                return [r - 1, c];
            } else if (!invalidIndexes.includes((r).toString() + ',' + (c - 1).toString())) {
                return [r, c - 1];
            } else return [r, c];
        }
        //Case 3: Left cell is lowest
        if (matrix[r][c - 1] <= matrix[r + 1][c] && matrix[r][c - 1] <= matrix[r - 1][c]) {
            if (!invalidIndexes.includes(r.toString() + ',' + (c - 1).toString())) {
                return [r, c - 1];
            } else if (matrix[r + 1][c] <= matrix[r - 1][c] && !invalidIndexes.includes((r + 1).toString() + ',' + c.toString())) {
                return [r + 1, c];
            } else if (!invalidIndexes.includes((r - 1).toString() + ',' + (c).toString())) {
                return [r - 1, c];
            } else return [r, c];
        }

    }
}
console.log(overallMinimum);