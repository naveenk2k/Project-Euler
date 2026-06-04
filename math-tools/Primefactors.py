import math


def primeFactors(n):
    if n <= 0:
        return 'Zero Error'
    factors = []
    while n % 2 == 0:
        factors.append(2)
        n = n / 2
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        while n % i == 0:
            factors.append(i)
            n = n / i
    if n > 2:
        #if n itself is prime
        factors.append(int(n))

    return factors


def uniquePrimeFactors(n):
    if n <= 0:
        return 'Zero Error'
    factors = set()
    while n % 2 == 0:
        factors.add(2)
        n = n / 2
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        while n % i == 0:
            factors.add(i)
            n = n / i
    if n > 2:
        #if n itself is prime
        factors.add(int(n))

    return list(factors)


print(primeFactors(20))
print(uniquePrimeFactors(24))
