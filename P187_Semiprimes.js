/*
Question:
A composite is a number containing at least two prime factors. For example, 15 = 3× 5; 9 = 3× 3; 12 = 2× 2× 3.

There are ten composites below thirty containing precisely two, not necessarily distinct, prime factors: 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.

How many composite integers, n < 108, have precisely two, not necessarily distinct, prime factors?

Answer: 17427258 (~13s)
*/

const sieve = require('./Useful Programs/SieveOfEratosthenes');

const limit = 10 ** 8;
const primes = sieve(limit);

let count = 0;

/* Method 1
LOGIC:
Consider the example with limit = 30.
The primes are already sorted in increasing order as follows: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
1. Initialize 'i' to the start and 'j' to the end of this array so that i = 0 and j = 9.
2. Test if the product of the primes at indexes 'i' and 'j' falls within our limit.
    i.  If not, move 'j' to the left, i.e j becomes 8 (value 23)
    ii. Otherwise, this tells us that all values of 'j' between 'i' and this current value will multiply to give numbers within our limit and so we can count them all and break out of this while loop, i.e no need to check lower 'j' values. Thus, count += [(j - i) + 1].
3. In the next iteration, we start with the next prime (Eg. 3) and check for a satisfactory 'j' value.
*/
let i = 0;
let j = primes.length - 1;

for (i = 0; i <= j; i++) {
    while (j >= i) {
        // console.log('i, j :', i, j);
        if (primes[i] * primes[j] < limit) {
            count += ((j - i) + 1);
            break;
        } else {
            j--;
        }
    }
}

/* Method 2: (Brute force but still takes about the same time so the above method is not that much better)
Logic:
Start with 2 and multiply with all primes (starting with itself) till we exceed the limit.
Then, start with 3 and proceed similarly.
Repeat for all primes in our range as long as we found a prime for the last number. There would be no point in checking with 7 * 7 was in our range if all products with 6 was already out of range. This is why flags are used below.
*/
// for (let i = 0; i < primes.length; i++) {
//     let foundFlag = false;
//     for (let j = i; j < primes.length; j++) {
//         const product = primes[i] * primes[j];
//         if (product >= limit) {
//             break;
//         } else {
//             foundFlag = true;
//         }
//         count++;
//     }
//     if (!foundFlag) {
//         break;
//     }
// }

console.log('count :', count);