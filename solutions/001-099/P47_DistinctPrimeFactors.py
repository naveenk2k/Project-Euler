'''
QUESTION: The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

ANSWER: 134043 (~1s)
'''

import math
limit = 1000000


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
        factors.append(int(n))

    real_factors = []
    for factor in factors:
        if (factor ** factors.count(factor) not in real_factors):
            real_factors.append(factor ** factors.count(factor))
    return set(real_factors)


for i in range(100000, limit):
    if len(primeFactors(i)) == 4 and len(primeFactors(i + 1)) == 4 and len(primeFactors(i + 2)) == 4 and len(primeFactors(i + 3)) == 4:
        if (len(primeFactors(i) & primeFactors(i + 1) & primeFactors(i + 2) & primeFactors(i + 3)) == 0):
            print(i)
            break
