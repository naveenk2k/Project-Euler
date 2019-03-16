/* QUESTION: If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?

ANSWER: 840 (~0.6s)
*/

let possiblePerimeters = [];

/*We get a < 500 because:
a + b < c
Adding 'c' to both sides,
a + b + c < 2c
Since a + b + c <= 1000,
2c <= 1000 or c <= 500
Since c is the longest side, a < c.
Thus, a < 500

And we get value of 'p' (inside 2nd loop) by solving p = a + b + c and a^2 + b^2 = c^2 and then solving the quadratic equation thus obtained.
*/
for (let a = 1; a < 500; a++) {
    for (let b = 1; b <= a; b++) {
        let p = a + b + Math.sqrt(a ** 2 + b ** 2);
        if (p <= 1000) {
            if (p === Math.round(p)) {
                if (possiblePerimeters[p]) {
                    possiblePerimeters[p]++;
                } else {
                    possiblePerimeters[p] = 1;
                }
            }
        } else {
            break;
        }
    }
}

let max = possiblePerimeters.reduce((a, b) => Math.max(a, b));

console.log(possiblePerimeters.indexOf(max));