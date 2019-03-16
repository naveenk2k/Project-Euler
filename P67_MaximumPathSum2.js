/* QUESTION: By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.

NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (10^12) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)

ANSWER: 7273 (~5ms)
*/

console.time('Time');
let fs = require('fs');
let num = fs
    .readFileSync('/Users/naveen/Desktop/Naveen/Other/Programming/Project\ Euler/p067_triangle.txt', 'utf8')
    .split('\n')
    //.slice(0, 100) //*note*
    .join(' ')
    .split(' ')
    .map(Number);

// *NOTE*: For some reason, an extra line is added at the end of the file so we delete it. Here it makes no difference because the size variable only counts 100 rows but otherwise there would be an extra empty line at the end which can't be added.

let size = 100;
let a = new Array(size);
for (let i = 0; i < size; i++) {
    a[i] = new Array(size);
}

let k = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
        a[i][j] = num[k];
        k++;
    }
}

for (let i = size - 2; i >= 0; --i) {
    for (let j = 0; j <= i; j++) {
        a[i][j] += Math.max(a[i + 1][j], a[i + 1][j + 1])
    }
}

console.log(a[0][0]);
console.timeEnd('Time');