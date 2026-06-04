//Prime Test

module.exports = (n) => {
    if (!Number.isInteger(n)) return false;
    if (n == 2) {
        return true;
    } else if (n <= 1 || n % 2 == 0) {
        return false; //1 isn't prime
    } else {
        let limit = Math.sqrt(n);
        for (let i = 3; i <= limit; i += 2) { //checking all numbers less than sqrt(n) for factors
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
};


// exports.isPrime = isPrime;
// console.log(isPrime(78989));