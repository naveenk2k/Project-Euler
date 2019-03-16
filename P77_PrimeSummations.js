function isPrime(n) {
    if (n <= 1) {
        return false; //1 isn't prime
    } else if (n == 2 || n == 3) {
        return true;
    } else if (n % 2 == 0 || n % 3 == 0) {
        return false;
    } else {
        let limit = Math.sqrt(n);
        for (let i = 3; i <= limit; i += 2) { //checking all numbers less than sqrt(n) for factors
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

//Logic is wrong - only counts sum of 2 individual numbers to give another number but this is not true: 10 = 2 + 2 + 2 + 2 + 2, 5 + 5, etc. The number of numbers is not known
let ways = [0, 1, 1, 1];

function getWays(n) {
    if (ways[n]) {
        return ways[n];
    } else if (isPrime(n)) {
        ways[n] = 1;
        return 1;
    } else {
        let sum = 0;
        for (let i = 1; i <= n / 2; i++) {
            if (isPrime(i) && isPrime(n - i)) {
                if (i != n - i) {
                    sum += getWays(i) + getWays(n - i);
                } else {
                    sum += getWays(i);
                }
            }
        }
        ways[n] = sum;
        return ways[n];
    }
}

console.log(getWays(8));
console.log(ways);
