/* QUESTION: Some positive integers n have the property that the sum [ n + reverse(n) ] consists entirely of odd (decimal) digits. For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers reversible; so 36, 63, 409, and 904 are reversible. Leading zeroes are not allowed in either n or reverse(n).

There are 120 reversible numbers below one - thousand.

How many reversible numbers are there below one - billion(10 ^ 9) ?

ANSWER: 608720 (~0.2s)
*/

/*
NOTE: In general, there are 20 * 30 ^ (n - 1) 2n - digit solutions, no 4n + 1 - digit solutions, and 5 * 20 * (25 * 20) ** n 4n + 3 - digit solutions.
*/

let count = 0;
for (let i = 1; i < 10; i++) {
    switch (i % 4) {
        case 0:
        case 2:
            {
                count += 20 * Math.pow(30, Math.round(i / 2 - 1));
                break;
            }
        case 1: {
            count += 100 * Math.pow(500, Math.round(i / 4 - 1));
            break;
        }
        case 3: break;
        default:
            break;
    }
}

console.log(count);