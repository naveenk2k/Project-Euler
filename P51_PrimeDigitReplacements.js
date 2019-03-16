function getPrimes(limit) {
    //Sieve of Eratostenes
    let primes = Array(limit).fill(true);
    primes[0] = primes[1] = false;
    let primeNumbers = [];
    for(let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            primeNumbers.push(i);
            for (let j = i; j < limit; j += i) {
                primes[j] = false;
            }
        }
    }
    return primeNumbers;
}

console.log(getPrimes(1000000));

function getReplacedNumber(num, replacement, positions) {
    //'replacement' is the number we want to replace in all the indexes part of array 'positions' in the original numbber 'num'
    num = num.toString().split('');
    for (position of positions) {
        num[position] = replacement;
    }
    return Number(num.join(''));
}
