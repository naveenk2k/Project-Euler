// Works for target=45 in 5s but can't handle 678910.
// Use logarithms somehow
// https://www.johndcook.com/blog/2017/06/20/leading-digits-of-powers-of-2/

let n = BigInt('1');

let i = 0;
let count = 0;
const target = 45;
while (count < target) {
    n <<= 1n;
    i++;
    if (n.toString().slice(0, 3) === '123') {
        count++;
        console.log(i);
    }
}

console.log(i);

