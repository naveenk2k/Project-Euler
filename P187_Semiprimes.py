# Use different logic
# Something like a sieve except generate primes
# 2xn1, 2xn2, 2xn3... are all primes
# The last one is 49999991x2 = 99999982 < 10**8

import math

def SieveOfEratosthenesArray(limit):
    primes = [True] * limit
    primeNumbers = []
    primes[0] = primes[1] = False
    for i, isPrime in enumerate(primes):
        if isPrime:
            primeNumbers.append(i)
            for n in range(i, limit, i):
                primes[n] = False
    return primeNumbers


#works only for small numbers
# primes = SieveOfEratosthenesArray(int((10 ** 8) / 2 + 0.5))
print(49999991*2)

# print(numbers)
