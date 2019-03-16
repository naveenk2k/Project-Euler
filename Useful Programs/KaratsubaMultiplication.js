// Implementation of Karatsuba Integer Multiplication Algorithm

//NOTE: This is probably much faster than the other 'school implementation' of multiplication in NumberOperations.js but this will fail for very big numbers since recursion depth will be very high and since JS can't add/subtract very big numbers.

// Refer to https://www.youtube.com/watch?v=JCbZayFr9RE for explanation of the algorithm.
// Refer to http://moais.imag.fr/membres/denis.trystram/SupportsDeCours/Karatsuba.pdf for analysis of the algorithm.

function karatsuba(x, y) {
    'use strict';

    // Converting x and y to strings to make future manipulation easier. Note that the inputs need not be strings since we convert them anyways
    x = (typeof (x) === 'number') ? x.toString() : x;
    y = (typeof (y) === 'number') ? y.toString() : y;

    // NOTE: Handling base case, i.e when the two numbers are small enough to be multiplied directly
    if (x.length == 1 || y.length == 1) return Number(x) * Number(y);

    // STEP 1: Calculate the number of digits of the two numbers, 'n'
    // NOTE: If x and y don't have the same number of digits
    if (x.length > y.length) {
        // If x has more digits, pad y with 0s (at the start)
        while (y.length < x.length) {
            y = '0' + y;
        }
    } else {
        // NOTE: If y has more digits, pad x with 0s (at the start)
        while (x.length < y.length) {
            x = '0' + x;
        }
    }
    // NOTE: The numbers need to have an even number of digits since 'n' has to be an even number
    if (x.length % 2 != 0) {
        x = '0' + x;
        y = '0' + y;
    }
    let n = x.length;

    // STEP 2: Split x and y into a, b, c and d
    let a, b, c, d;
    // NOTE: a is the first (n/2) digits of x, b is the remaining digits. Similarly, c is the first (n/2) digits of y, d is the remaining digits
    a = x.slice(0, n / 2);
    b = x.slice(n / 2);
    c = y.slice(0, n / 2);
    d = y.slice(n / 2);

    // STEP 3: Compute the product recursively
    let ac = karatsuba(a, c);
    let bd = karatsuba(b, d);
    let middle_term = Number(karatsuba(Number(a) + Number(b), Number(c) + Number(d)) - Number(ac) - Number(bd));
    return Math.pow(10, n) * Number(ac) + Math.pow(10, n / 2) * Number(middle_term) + Number(bd);
}

console.log(karatsuba('0090', '089'));
console.log(karatsuba(3898, 3488));