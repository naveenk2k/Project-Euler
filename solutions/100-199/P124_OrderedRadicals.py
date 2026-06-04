'''
QUESTION: The radical of n, rad(n), is the product of the distinct prime factors of n. For example, 504 = 23 × 32 × 7, so rad(504) = 2 × 3 × 7 = 42.

If we calculate rad(n) for 1 ≤ n ≤ 10, then sort them on rad(n), and sorting on n if the radical values are equal, we get:

Let E(k) be the kth element in the sorted n column; for example, E(4) = 8 and E(6) = 9.

If rad(n) is sorted for 1 ≤ n ≤ 100000, find E(10000).

ANSWER: 21417 (~1.6s)
'''

import math
from functools import reduce
limit = 100001


def primeFactors(n):
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
        factors.add(int(n))

    return list(factors)


rad = []
for i in range(1, limit):
    r = reduce(lambda x, y: x*y, primeFactors(i), 1)
    rad.append([i, r])

rad.sort(key=lambda x: x[0])
rad.sort(key=lambda x: x[1])


def E(n, arr):
    for index, l in arr:
        if index == n:
            return l[0]


print(E(10000, list(enumerate(rad, 1))))
