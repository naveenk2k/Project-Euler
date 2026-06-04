/* QUESTION:
Consider quadratic Diophantine equations of the form:
    x ^ 2– Dy ^ 2 = 1
For example, when D = 13, the minimal solution in x is 6492 - 13 * 1802 = 1.

It can be assumed that there are no solutions in positive integers when D is square.

By finding minimal solutions in x
for D = {2, 3, 5, 6, 7}, we obtain the following:

3 ^ 2 - 2 * 2 ^ 2 = 1
2 ^ 2 - 3 * 1 ^ 2 = 1
9 ^ 2 - 5 * 4 ^ 2 = 1
5 ^ 2 - 6 * 2 ^ 2 = 1
8 ^ 2 - 7 * 3 ^ 2 = 1

Hence, by considering minimal solutions in x for D <= 7, the largest x is obtained when D = 5.

Find the value of D <= 1000 in minimal solutions of x for which the largest value of x is obtained.

ANSWER: 661
*/

/*NOTE:

1> My code below doesn't work. The solutions for x and y are simply too big. I cheated and found the answer by reading the wikipedia article which says:

Values of n such that the smallest solution of x^2 - n * y^2 = 1 is greater than the smallest solution for any smaller value of n are:
1, 2, 5, 10, 13, 29, 46, 53, 61, 109, 181, 277, 397, 409, 421, 541, 661, 1021, 1069, 1381, 1549, 1621, 2389, 3061, 3469, 4621, 4789, 4909, 5581, 6301, 6829, 8269, 8941, 9949, ...

Clearly we see that 661 is the answer from the above list.

2> Correct way to solve would be to use Pell's Equation and the way we find the solution for that is by finding continued fractions for sqrt(D). Resources:
http://mathworld.wolfram.com/PellEquation.html
http://mathworld.wolfram.com/Convergent.html
*/

let x;
let Ds = [];
let limit = 10 ** 3;
let largestX = 0;
let requiredD;

for (let i = 0; i <= limit; i++) {
    if (!Number.isInteger(Math.sqrt(i))) Ds.push(i);
}

// for (let D of Ds) {
//     for (let y = 1;; y++) {
//         x = Math.sqrt(1 + D * y ** 2);
//         if (Number.isInteger(x)) {
//             if (x > largestX) {
//                 largestX = x;
//                 requiredD = D;
//             }
//             break;
//         }
//     }
// }

// console.log(largestX, requiredD);


for (let y = 1;; y++) {
    x = Math.sqrt(1 + 313 * (y * y));
    // console.log(x);
    if (Number.isInteger(x)) {
        console.log(x, y);
        break;
    }
}

console.log((126862368 * 126862368) - 313 * (7170685 * 7170685));