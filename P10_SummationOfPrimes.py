'''
QUESTION: The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

ANSWER: 142913828922 (~0.3s)
'''


def SieveOfEratosthenes(limit):
	sievebound = int((limit - 1) / 2)
	sieve = [False] * sievebound
	crosslimit = int((round(limit ** 0.5) - 1) / 2)
	for i in range(1, crosslimit):
		if not sieve[i]:
			for j in range(2*i*(i+1), sievebound, 2*i + 1):
				sieve[j] = True
	sum = 2
	for i in range(1, sievebound):
		if not sieve[i]:
			sum += (2*i+1)
	return sum


print(SieveOfEratosthenes(2000000))