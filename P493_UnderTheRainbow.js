/*
Question:
70 coloured balls are placed in an urn, 10 for each of the seven rainbow colours.

What is the expected number of distinct colours in 20 randomly picked balls?

Give your answer with nine digits after the decimal point (a.bcdefghij).

Answer: 6.818741802 (~0.1s)
*/

/* 
Logic:
Since expectation is linear, 
    i.e E(X1 + X2 + ... + Xn) = E(X1) + E(X2) + ... + E(Xn),
the expected number of colours 
    = prob(a red ball gets picked) + prob(an orange ball gets picked) + ... + prob(a violet ball gets picked)
By symmetry, all these probabilities are the same, so the answer is just 7 times the probability that red gets picked.

There are 60 non-red balls out of 70. So, there are C(60, 20) ways to pick all non-red balls, out of C(70, 20) ways to pick 20 balls from the total. So the probability that red is definitely picked is
    = 1 − C(60, 20)/C(70, 20)

The expected value of the number of colours present is just the sum of the expected values of the number of occurrences of the individual colours
    = 7 * (1 − C(60, 20)/C(70, 20))
*/

const combinatorics = require('./combinatorics');
const ans = 7 * (1 - combinatorics.C(60, 20) / combinatorics.C(70, 20))
console.log(ans.toFixed(9));