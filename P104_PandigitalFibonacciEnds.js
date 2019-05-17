// Find proper logic.
// Takes way too long so had to quit.
// Can find F541 and F2749 very quickly but can't find one where both first 9 and last 9 digits are pandigital

const isPandigital = require('./Useful Programs/PandigitalTest').isPandigital;
const add = require('./Useful Programs/NumberOperations').add;

let a = '1',
    b = '1',
    c,
    i = 2;

let found = false;
while (!found) {

    if (isPandigital(b.slice(0, 9)) && isPandigital(b.slice(-9))) {
        found = true;
        console.log(b);
        console.log(i);
    }

    c = add(a, b);
    a = b;
    b = c;
    i++;

    // NOTE: Tried to remove 60 numbers from the middle (as suggested by https://euler.s tephan-brumme.com/104/) cause we only care about start and end but this didn't work for some reason.
    // if (b.length > 100) {
    //     a = a.slice(0, 20) + a.slice(-20);
    //     b = b.slice(0, 20) + b.slice(-20);
    // }
}