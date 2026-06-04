'''
QUESTION: A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

ANSWER: 972 (~0.4s)
'''

# brute forces

from functools import reduce


def get_digital_sum(x):
    x = list(map(int, list(str(x))))
    sum = reduce(lambda x, y: x + y, x, 0)
    return sum


large = 945
for i in range(100, -1, -1):
    for j in range(100, -1, -1):
        p = i ** j
        if get_digital_sum(p) > large:
            large = get_digital_sum(p)

print(large)
