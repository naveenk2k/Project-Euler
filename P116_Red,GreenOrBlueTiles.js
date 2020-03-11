/*
Question:
A row of five grey square tiles is to have a number of its tiles replaced with coloured oblong tiles chosen from red (length two), green (length three), or blue (length four).

If red tiles are chosen there are exactly seven ways this can be done.
If green tiles are chosen there are three ways.
And if blue tiles are chosen there are two ways.

Assuming that colours cannot be mixed there are 7 + 3 + 2 = 12 ways of replacing the grey tiles in a row measuring five units in length.

How many different ways can the grey tiles in a row measuring fifty units in length be replaced if colours cannot be mixed and at least one coloured tile must be used?

ANSWER: 20492570929 (~6ms)
*/

/*
LOGIC:
Number of ways of choosing the red tiles 
    = Number of ways of choosing 1 red tile among n-2 grey tiles + Number of ways of choosing 2 red tiles among n-4 grey tiles + ... 
    = Number of ways of choosing 1 tile out of n-1 + Number of ways of choosing 2 tiles out of n-2 + ...
    = C(n-1, 1) + C(n-2, 2) + ... + C(n-i, i) until n-i >= i, i.e 1 <= i <= floor(n/2)

Number of ways of choosing the green tiles 
    = Number of ways of choosing 1 green tile among n-3 grey tiles + Number of ways of choosing 2 red tiles and n-6 grey tiles + ... 
    = Number of ways of choosing 1 tile out of n-2 + Number of ways of choosing 2 tiles out of n-4 + ...
    = C(n-2, 1) + C(n-4, 2) + ... + C(n-2i, i) until n-2i >= i, i.e 1 <= i <= floor(n/3)

Number of ways of choosing the red tiles 
    = Number of ways of choosing 1 blue tile among n-4 grey tiles + Number of ways of choosing 2 blue tiles among n-8 grey tiles + ... 
    = Number of ways of choosing 1 tile out of n-3 + Number of ways of choosing 2 tiles out of n-6 + ...
    = C(n-3, 1) + C(n-6, 2) + ... + C(n-3i, i) until n-3i >= i, i.e 1 <= i <= floor(n/4)
*/

console.time('Time');

const combinatorics = require('./combinatorics');

let sum = 0;
let n = 50;

for (let i = 1; i <= Math.floor(n / 2); i++)
    sum += combinatorics.C(n - i, i);

for (let i = 1; i <= Math.floor(n / 3); i++)
    sum += combinatorics.C(n - 2 * i, i);

for (let i = 1; i <= Math.floor(n / 4); i++)
    sum += combinatorics.C(n - 3 * i, i);

console.log(sum);
console.timeEnd('Time');