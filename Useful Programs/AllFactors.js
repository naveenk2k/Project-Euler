//Basic implementation (although it only checks till sqrt(n))
function getProperDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                divisors.push(i);
            } else {
                divisors.push(i);
                divisors.push(n / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}

// console.log(getProperDivisors(600851475143));

function getProperDivisorsSum(n) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                sum += i;
            } else {
                sum += (i + n / i);
            }
        }
    }
    sum -= n;
    return sum;
}

function largestPrimeFactor(val, divisor = 2) {
    let square = (val) => Math.pow(val, 2);

    while ((val % divisor) != 0 && square(divisor) <= val) {
        divisor++;
    }

    return square(divisor) <= val ?
        largestPrimeFactor(val / divisor, divisor) :
        val;
}

let result = largestPrimeFactor(600851475143);
console.log(result);

console.log(600851475143 < 10000000000);