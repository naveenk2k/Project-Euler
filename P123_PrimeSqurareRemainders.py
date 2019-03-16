'''
QUESTION: Let pn be the nth prime: 2, 3, 5, 7, 11, ..., and let r be the remainder when (pn−1)^n + (pn+1)^n is divided by pn^2.

For example, when n = 3, p3 = 5, and 4^3 + 6^3 = 280 ≡ 5 mod 25.

The least value of n for which the remainder first exceeds 109 is 7037.

Find the least value of n for which the remainder first exceeds 1010.

ANSWER: 21035 (140s)
'''

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

# primes = SieveOfEratosthenesArray(10 ** 7)

# def getRemainder(n):
#     p_of_n = primes[n - 1]
#     r = (pow((p_of_n - 1), n) + pow((p_of_n + 1), n)) % pow(p_of_n, 2);
#     return r

# for n in range(10 ** 4, 10 ** 5):
#     if (getRemainder(n) > 10 ** 10):
#         print(n)
#         break



primes = SieveOfEratosthenesArray(1000000)

for n in range(7038, len(primes), 2):
    if 2*(n+1)*primes[n] > pow(10, 10):
	    print(n+1)
	    break
