import math

#Something wrong with the calculation. Do the maths again.
def term1(n):
    return (n * pow((1 + n), 2) ) / (8 * pow((1 + n * n), 2))


def term2(n):
    return ((n * (n - 1)) / 4 * (1 + pow(n , 2))) * (1 + (math.sqrt(2 * pow(n, 3) + pow(n, 2) + 1) / 2))

def term3(n):
    return (math.asin((n * (1 - n)) / (1 + pow(n, 2)))) / 8

def fractionOfL(n):
    return (16 * (term1(n) + term2(n) - term3(n))) / (4 - math.pi)

for i in range(15):
    print(fractionOfL(i))


# fractionOfL(1) should be 0.5
# fractionOfL(2) should be 0.3646
# Once fixed, find first value of 'i' for which fractionOfL(i) < 0.001
