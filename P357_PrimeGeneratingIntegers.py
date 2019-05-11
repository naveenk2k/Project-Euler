# NOTE: Need more optimization. Takes a few minutes for 10^7 without using sieve of precalculated primes. Maybe try writing it in C.

# 524402304 till 10^6
# 27814470276 till 10^7

import math

def isPrime(n):
    prime = True
    if n <= 1:
        return False
    elif n == 2:
        return True
    elif n % 2 == 0:
        return False
    else:
        i = 3
        limit = n ** 0.5
        while i <= limit:
            if n % i == 0:
                return False
            i += 2
        return True

sum = 0


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


def satisfies(n):
    i = 2
    while i <= math.sqrt(n):
        if (n % i == 0):
            if (n / i == i):
                return False
            elif i + n / i not in primes:
                return False
        i = i + 1
    return True

limit = 10 ** 7

primes = SieveOfEratosthenesArray(limit)

for i in range(2, limit, 4):
    if isPrime(i + 1) and isPrime(2 + i / 2) and satisfies(i):
        sum += i

print(sum)