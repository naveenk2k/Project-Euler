/* QUESTION: 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

ANSWER: 1366 (0.1s)
*/

console.log(
    (2n ** 1000n)
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0)
);