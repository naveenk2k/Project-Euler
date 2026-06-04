let m = [0, 1, 1];

function getProperDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                divisors.push([i, i]);
            } else {
                divisors.push([i, n / i]);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}

//Logic that the minimum value for n is the minimum of the sum of minimum values for the factor pairs of n. But I don't think this is the correct way to do it. Try another way. Perhaps by doing n^2*n2 = n^4, then n^4*n^4 = n^8, n^8*n^8 = n^16, etc and get as far and possible and then when you cant go any further by that logic, do the same for the remainder. Recursion maybe?
function minimumMultiplcations(n) {
    let min = 10**7;
    let factors = getProperDivisors(n);
    for (const [x, y] of factors) {
        if (m[x] + m[y] < min) {
            min = m[x] + m[y];
        }
    }
    // for (let i = 1; i <= n / 2; i++) {
    //     if (m[i] + m[n - i] < min) {
    //         min = m[i] + m[n - i];
    //         console.log(i, n - i, m[i], m[n - i], min);

    //     }
    // }
    m[n] = min;
}

for (let i = 3; i < 5; i++) {
    minimumMultiplcations(i)
}
console.log(m);
