# Need to find an algorithm for the continued fractional representation of sqrt(x). It's called Recurrance Relations. http://mathworld.wolfram.com/Convergent.html

# To calculate a continued fraction representation of a number r, write down the integer part (technically the floor) of r. Subtract this integer part from r. If the difference is 0, stop; otherwise find the reciprocal of the difference and repeat.
import math
from fractions import Fraction

def getContinuedFraction(r):
    diff = Fraction(r - math.floor(r))
    reci = Fraction(1 / diff)
    print(reci)


getContinuedFraction(3.4)
