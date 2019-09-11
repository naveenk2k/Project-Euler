// http://www.algorithmist.com/index.php/Coin_Change
// https://blog.dreamshire.com/project/dyn_prog.pdf

const s = [1, 2, 5, 10, 20, 50, 100, 200];

const getCount = (n, m) => {
    if (n < 0 || m < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    return (getCount(n, m - 1) + getCount(n - s[m - 1], m));
}

console.log(getCount(7, 8));