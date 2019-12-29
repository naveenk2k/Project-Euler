'''
Question:
It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.

The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.

For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.

Answer: 40886 (~0.05s)
'''

# Note: This can be 'actually' solved using the digit-by-digit method of finding square roots. Refer https://www.math-only-math.com/square-root-of-numbers-that-are-not-perfect-squares.html or the forum for this problem.

from math import sqrt
from decimal import Decimal, getcontext


# Need 102 places because we remove the decimal point
getcontext().prec = 102

def getDigitalSumOfSquareRoot(n):
    root = Decimal(n).sqrt()
    decimals = str(root).replace('.', '')[:100]
    decimals = map(int, decimals)
    s = sum(decimals)
    return s

total = 0
for i in range(1, 101):
    if (sqrt(i) != int(sqrt(i))):
        total += getDigitalSumOfSquareRoot(i)

print(total)
