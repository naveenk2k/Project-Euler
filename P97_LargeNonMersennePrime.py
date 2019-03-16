'''
QUESTION: The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2^6972593−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2^p−1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433×2^7830457+1.

Find the last ten digits of this prime number.

ANSWER: 8739992577 (0.07s)
'''

# 3rd agrument in pow is the modulus to calculate
n = pow(2, 7830457, 10000000000)
# ans = (n * 28433 + 1) % 10000000000  # doing modulus to get last 10 digits. Can also do:
ans = str((n * 28433 + 1))[-10::]
print(ans)
