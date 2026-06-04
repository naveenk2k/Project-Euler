/* QUESTION: The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

ANSWER: 872187 (2.606s)
*/

let sum = 0;
for (let i = 1; i < 1000000; i += 2) {
    let b10num = i;
    let b10numrev = Number(b10num.toString().split('').reverse().join(''));
    let b2num = Number(b10num.toString(2));
    let b2numrev = Number(b10num.toString(2).split('').reverse().join(''));
    if (b10num === b10numrev && b2num === b2numrev) {
        sum += b10num;
    }

}
console.log(sum);