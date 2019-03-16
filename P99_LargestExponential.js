/*
QUESTION: Comparing two numbers written in index form like 211 and 37 is not difficult, as any calculator would confirm that 211 = 2048 < 37 = 2187.

However, confirming that 632382518061 > 519432525806 would be much more difficult, as both numbers contain over three million digits.

Using base_exp.txt(right click and 'Save Link/Target As...'), a 22 K text file containing one thousand lines with a base / exponent pair on each line, determine which line number has the greatest numerical value.

NOTE: The first two lines in the file represent the numbers in the example given above.

ANSWER: 709 (~4ms)
*/

'use strict';

console.time('time');
let fs = require('fs') // To load the file

// Parsing the exponents as an array of array of numbers
let exponents = fs.readFileSync('p099_base_exp.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line
        .split(',')
        .map(Number)
    );


let maxExponent = 0;
let indexOfMaxExponent;

// Looping through all the exponents and comparing b * log10(a) for every a^b
for (let i = 0; i < exponents.length; i++) {
    let currentExponent = exponents[i][1] * Math.log10(exponents[i][0]);
    if (currentExponent > maxExponent) {
        maxExponent = currentExponent;
        indexOfMaxExponent = i + 1;
    }
}

console.log(indexOfMaxExponent);
console.timeEnd('time');