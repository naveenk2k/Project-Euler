# Returns a list containing all the primes till n (Somewhat Optimised)
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

# Returns a list containing all the primes till n (But it's a basic implementation - not optimised)
def SieveOfEratostenes(n):
	sieve = set(range(2, n + 1))
	primes = []
	while sieve:
		smallest = min(sieve)
		primes.append(smallest)
		sieve -= set(range(smallest, n + 1, smallest))
	return primes

# Returns sum of primes till limit
def SieveOfEratosthenesSum(limit):
    sievebound = int((limit - 1) / 2)
    sieve = [False] * sievebound
    crosslimit = round((round(limit ** 0.5) - 1) / 2)
    for i in range(1, crosslimit):
        if not sieve[i]:
            for j in range(2*i*(i+1), sievebound, 2*i + 1):
                sieve[j] = True
    sum = 2
    for i in range(1, sievebound):
        if not sieve[i]:
            sum += (2*i+1)
    return sum


print(SieveOfEratosthenesArray(100))
# print(SieveOfEratosthenesSum(100))
