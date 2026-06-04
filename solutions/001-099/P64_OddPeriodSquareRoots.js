/*
Question:
All square roots are periodic when written as continued fractions.
Exactly four continued fractions, for N≤13, have an odd period.

How many continued fractions for N≤10000 have an odd period?

[See https://projecteuler.net/problem=64 for full question]

Answer: 1322 (~20ms)
*/

console.time('Time');

/*
 *  A function to calculate the continued fraction for sqrt(n) based on the algorithm specified in section 6.2.2 of http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/cfINTRO.html#section6
 *
 */
const getContinuedFraction = n => {
    let m = Math.trunc(Math.sqrt(n));
    let d = n - m * m;
    let x = (Math.sqrt(n) + m) / d;

    if (d === 1) {
        // Period of 1
        return 1;
    }

    const fractions = [Math.trunc(x)];
    while (d !== 1) {
        let newM = d * Math.trunc(x) - m;
        let newD = (n - newM * newM) / d;
        let newX = (Math.sqrt(n) + newM) / newD;

        m = newM;
        d = newD;
        x = newX;

        fractions.push(Math.trunc(x));
        // console.log(m, d, x, fractions);
    }
    return fractions.length;
};

let countOfOddPeriod = 0;
for (let i = 1; i < 10001; i++) {
    if (Math.sqrt(i) !== Math.trunc(Math.sqrt(i))) {
        if(getContinuedFraction(i) % 2 !== 0)
            countOfOddPeriod++;
    }
}
console.log(countOfOddPeriod);
console.timeEnd('Time');