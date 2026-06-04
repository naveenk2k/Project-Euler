/*
QUESTION: Let r be the remainder when (a−1)^n + (a+1)^n is divided by a^2.

For example, if a=7 and n=3, then r=42: 6^3 + 8^3 = 728 ≡ 42 mod 49. And as n varies, so too will r, but for a = 7 it turns out that rmax = 42.

For 3≤a≤1000, find ∑rmax.

ANSWER: 333082500 (~3ms)
*/

/*
 *  Using binomial theorem,
 *  (x+1)^n = nC0*1^n + nC1*x*(1)^(n-1) + nC2x^2*1^(n-2) + ...
 *  (x-1)^n = nC0*(-1)^n + nC1*x*(-1)^(n-1) + nC2*x^2*(-1)^(n-2) + ...
 *
 *  The only terms which are not divisible by x^2 are the first two, which are
 *  1 + nx for (x+1)^n, i.e (x+1)^n modulo x^2 = 1 + nx and
 *  (-1)^n + nx*(-1)^(n-1) for (x-1)^n, i.e modulo x^2, i.e (x-1)^n modulo x^2 = (-1)^n + nx*(-1)^(n-1)
 *  because all other terms contain x^2 terms.
 *
 *  Adding the above terms,
 *  [(x+1)^n + (x-1)^n] modulo x^2 = 1 + nx + (-1)^n + nx*(-1)^(n-1)
 *  When n is odd, we get 1 + nx - 1 + nx = 2nx
 *  When n is even, we get 1 + nx + 1 - nx = 2
 *
 *  When a is odd, this is always maximised at a^2-a (as in the example with a=7), achieved for example when n=(a-1)/2
 *  When a is even, it is maximised at a^2-2a for a>2, achieved for example when n = (a-2)/2.
 *
 *  Thus, we add either a(a-1) or a(a-2) to our sum depending on whether a is even or odd respectively.
 */

console.time('Time: ');
let sum = 0;
for (let a = 3; a < 1001; a++) {
    sum += a * (a - ((a % 2 == 0)? 2 : 1));
}

console.log(sum);
console.timeEnd('Time: ');