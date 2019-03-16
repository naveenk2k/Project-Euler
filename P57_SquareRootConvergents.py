'''
QUESTION: It is possible to show that the square root of two can be expressed as an infinite continued fraction.

√ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...

By expanding this for the first four iterations, we get:

1 + 1/2 = 3/2 = 1.5
1 + 1/(2 + 1/2) = 7/5 = 1.4
1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?

ANSWER: 152 (~0.05s)
'''

# NOTE: If (q + p) / q is the nth number, then (3q + p) / (2q + p) is the (n+1)th number.

convergents = [(3, 2)]
count = 0
for i in range(1000):
        qplusp, q = convergents[i]
        p = qplusp - q
        newN = 3 * q + p
        newD = 2 * q + p
        convergents.append((newN, newD))
        if (len(str(newN)) > len(str(newD))):
                count += 1

print(count)
