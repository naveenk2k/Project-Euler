/*
Progress:
Find better ways to store precomputed values.
fillS(5e4); runs in around 5s but fillS(1e5) takes far too long.
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

const memoized_S = [];
// This calculates S[i] based on the formula S[i] = S[i-1] + s(i).
// TODO: Should this be modded too?
const fillS = (n) => {
    memoized_S[0] = 0n;
    for (let i = 1; i <= n; ++i) {
        memoized_S[i] = (memoized_S[i - 1] + BigInt(s(i))) % BigInt(mod);
    }
}

const S = n => {
    if (!memoized_S[n]) {
        console.log("Not enough S");
        process.exit(0);
    }
    else return memoized_S[n];
};

const solve = () => {
    let answer = 0n;
    let n1 = 0;
    let n2 = 1;
    fibs = [n1, n2];
    for (let i = 2; i < 10; ++i) {
        let n = n1 + n2;
        fibs.push(n);
        answer += (BigInt(S(n)) % BigInt(mod));
        n1 = n2;
        n2 = n;
    }
    console.log('answer :>> ', answer);
};

fillS(5e4);
console.log(memoized_S[memoized_S.length - 1]);
// solve();
console.log(`S(20) = ${memoized_S[20]}`);