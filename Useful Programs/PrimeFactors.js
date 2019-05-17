const getUniquePrimeFactors = n => {
    let factors = new Set();
    while (n % 2 === 0) {
        factors.add(2);
        n = n >> 1;
    }
    for (let i = 3; i < Math.sqrt(n) + 1; i += 2) {
        while (n % i === 0) {
            factors.add(i);
            n = n / i;
        }
    }
    if (n > 2) {
        // If n itself is prime
        factors.add(n);
    }
    return [...factors];
}

module.exports = {
    getUniquePrimeFactors
};