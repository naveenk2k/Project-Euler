/* QUESTION: Triangle, square, pentagonal, hexagonal, heptagonal, and octagonal numbers are all figurate (polygonal) numbers and are generated by the following formulae:

Triangle	 	P3,n=n(n+1)/2	 	1, 3, 6, 10, 15, ...
Square	 	    P4,n=n2	 	        1, 4, 9, 16, 25, ...
Pentagonal	 	P5,n=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
Hexagonal	 	P6,n=n(2n−1)	 	1, 6, 15, 28, 45, ...
Heptagonal	 	P7,n=n(5n−3)/2	 	1, 7, 18, 34, 55, ...
Octagonal	 	P8,n=n(3n−2)	 	1, 8, 21, 40, 65, ...

The ordered set of three 4-digit numbers: 8128, 2882, 8281, has three interesting properties:

The set is cyclic, in that the last two digits of each number is the first two digits of the next number (including the last number with the first).
Each polygonal type: triangle (P3,127=8128), square (P4,91=8281), and pentagonal (P5,44=2882), is represented by a different number in the set.
This is the only set of 4-digit numbers with this property.

Find the sum of the only ordered set of six cyclic 4-digit numbers for which each polygonal type: triangle, square, pentagonal, hexagonal, heptagonal, and octagonal, is represented by a different number in the set.

ANSWER: 28684 (~175ms)
*/

/* LOGIC:

Pretty much https://www.mathblog.dk/project-euler-61-numbers-cyclic-property/ but I used iteration instead of recursion.

1. Generate all polygonal numbers and add to an array in the form [type, number].
2. Loop through all the numbers. This will be the first element of our assumed solution.
3. Now find all numbers from the remaining bunch which could go to the right of the previous number in 'solution'
4. Try each of them and see how far we get, each time generating the numbers which could come to the right of the last added number.
5. If the length of our solution is ever 6, i.e found 6 numbers in a cyclic order, we check if the last number and first are also cyclic. If yes, we've found our answer.
6. If at any point we can't find a valid number to come next in our solution and we've exhausted all our possible options, then pop that last element and try with a number number.
*/


console.time('Time');

// Generating all the numbers. Found the limits of for loop manually by checking for the last 4 digit n-gonal-number
let polygonal_numbers = [];

for (let i = 45; i <= 140; i++) {
    let t = (i * (i + 1)) / 2;
    polygonal_numbers.push([0, t]);
}

for (let i = 32; i <= 99; i++) {
    let s = i ** 2;
    polygonal_numbers.push([1, s]);
}

for (let i = 26; i <= 81; i++) {
    let p = (i * ((3 * i) - 1)) / 2;
    polygonal_numbers.push([2, p]);
}

for (let i = 23; i <= 70; i++) {
    let h = i * (2 * i - 1);
    polygonal_numbers.push([3, h]);
}

for (let i = 21; i <= 63; i++) {
    let h = i * (5 * i - 3) / 2;
    polygonal_numbers.push([4, h]);
}

for (let i = 19; i <= 58; i++) {
    let o = i * (3 * i - 2);
    polygonal_numbers.push([5, o]);
}


// Useful functions
function isCyclic([x, n1], [y, n2]) {
    return n1.toString()[2] == n2.toString()[0] && n1.toString()[3] == n2.toString()[1];
}

function contains([n, m], arr) {
    for (const [x, y] of arr) {
        if (x === n && y === m) return true;
    }
    return false;
}

function alreadyHasType([n, m], arr) {
    for (const [x, y] of arr) {
        if (x === n) return true;
    }
    return false;
}


// To remove an element from an array which contains elements of the type [A, B]
function remove([n, m], arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === n && arr[i][1] === m) {
            arr.splice(i + 1);
            break;
        }
    }
}

// Generate all possible number which could come to the right of a number 'n' of type 'x' from the array 'arr' such that no repetitions of 'x' occur
function getRightCyclicMatches([x, n], arr) {
    let valid = arr.filter(([y, num]) => {
        return x !== y && n.toString()[2] == num.toString()[0] && n.toString()[3] == num.toString()[1]
    });
    if (valid.length > 0) {
        return valid;
    } else {
        return [];
    }
}

// Nested for/while loops to find solution
let solution = [];
let foundSolution = false;

for (let i = 0; i < polygonal_numbers.length && solution.length < 6; i++) { // Any of the numbers can be the starting point
    solution = [polygonal_numbers[i]];

    let tried = [solution[0]];
    while (solution.length > 0 && !foundSolution) {
        let possible = getRightCyclicMatches(solution[solution.length - 1], polygonal_numbers);
        for (let j = 0; j < solution.length; j++) {
            for (let k = 0; k < possible.length; k++) {
                if (solution[j][0] === possible[k][0]) {
                    possible.splice(k, 1);
                }
            }
        }

        // Now, 'possible' has all the numbers which can come next. No series repeated from the 'solution' so far.
        // If there's nothing in possible (and we haven't reached the end), pop the last element and try again.
        // Other wise, add one of the possibilities and try further
        if (possible.length === 0) {
            // If there are no numbers that can come next
            const last = solution.pop();
            remove(last, tried);
        } else {
            // Else there are some numbers that could come next (but some of them could already have been tried)
            let found = false;
            for (p of possible) {
                if (!contains(p, tried) && !alreadyHasType(p, solution)) {
                    // Found a number from the possibilities that we haven't tried yet and a number that's not of the same type as any of the numbers in our solution so far. So we'll try that now.
                    solution.push(p);
                    tried.push(p);
                    found = true;
                    break;
                }
            }
            if (!found) {
                const last = solution.pop();
                remove(last, tried);

            }
        }
        if (solution.length === 6) {
            if (isCyclic(solution[solution.length - 1], solution[0])) {
                // If it completes the cyclic chain (ie. last and first)
                foundSolution = true;
            }
        }
    }
    if (foundSolution) {
        console.log(solution);
        let sum = solution.reduce((acc, curr) => acc += curr[1], 0);
        console.log(sum);
        console.log('DONE!');
        break;
    }
}

console.timeEnd('Time');