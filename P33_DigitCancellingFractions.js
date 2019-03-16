/* QUESTION: The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

ANSWER: 100 (0.5s)
*/

let a = [];
for (let i = 11; i < 100; i++) {
    for (let j = 11; j < i; j++) {
        if (isDigitCancelling(j, i)) {
            a.push([j, i]);
        }
    }
}

function isDigitCancelling(a, b) { //a < b
    let x = a;
    let y = b;
    if (a % 10 == 0 && b % 10 == 0) return false;
    a = a.toString().split('');
    b = b.toString().split('');
    for (let d of a) {
        if (b.includes(d)) {
            b.splice(b.indexOf(d), 1)
            a.splice(a.indexOf(d), 1)
        }
    }
    a = Number(a);
    b = Number(b);
    return a / b === x / y
}

console.log(a);