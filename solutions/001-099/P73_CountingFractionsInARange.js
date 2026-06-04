/*
Question:
Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that there are 3 fractions between 1/3 and 1/2.

How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000?

Answer: 7295372 (3.5s)
*/

/*
Logic:
For each denominator 'n'  between 1 and 12000, loop through all possible numerators 'p' such are that (1/3) < (p/n) < (1/2).
If, gcd(n, p) = 1, i.e they are in reduced form, increment count.
*/

console.time('Time');
let count = 0;

var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
};

for (let n = 1; n < 12001; n++) {
    for (let p = Math.ceil((n + 1) / 3); p < Math.ceil(n / 2); p++) {
        if (gcd(p, n) === 1)
            count++;
    }
}

console.log('count :', count);
console.timeEnd('Time');