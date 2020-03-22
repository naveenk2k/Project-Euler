/*
Progress:
Calculates S(fi) for the first 24 fibonacci numbers pretty fast, but not above that.
Find a way to cache values better to avoid calculating s(n) from 1 to n for all values of S(n).
*/

const mod = 10 ** 9 + 7;

const memoized_s = [];
const s = n => {
    if (!memoized_s[n]) {
        let p = (n % 9).toString();
        let q = Math.trunc(n / 9);
        memoized_s[n] = BigInt(`${p}${'9'.repeat(q)}`) % BigInt(mod);
    }
    return memoized_s[n];
}

const S = n => {
    let sum = 0n;
    for (let i = 1; i < n + 1; i++) {
        sum += s(i);
        sum %= BigInt(mod);
    }
    return sum;
};

const solve = () => {
    let answer = 0n;
    let n1 = 0;
    let n2 = 1;
    for (let i = 2; i < 24; i++) {
        let n = n1 + n2;
        answer += (BigInt(S(n)) % BigInt(mod));
        // answer %= mod;
        // console.log(answer);
        n1 = n2;
        n2 = n;
    }
    console.log(answer);
};
//4107043021n
solve();
// s(38);
// console.log(S(20));