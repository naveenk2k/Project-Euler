'''
QUESTION: The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

ANSWER: 997651 (~25s but program doesn't end there)
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


def isPrime(n):
    prime = True
    if n <= 1:
        return False
    elif n == 2:
        return True
    elif n % 2 == 0:
        return False
    else:
        i = 3
        limit = n ** 0.5
        while i <= limit:
            if n % i == 0:
                return False
            i += 2
        return True


limit = 1000000
maxCount = 0
largest = 0

primes = SieveOfEratosthenesArray(round(limit / 3))
for i in range(len(primes)):
    if len(primes) - i < maxCount:
        break
    count = 0
    for j in range(len(primes) - 1, i - 1, -1):
        count = j + 1 - i
        consecutivePrimeSum = sum(primes[i:j+1])
        if consecutivePrimeSum < limit and isPrime(consecutivePrimeSum) and count > maxCount:
            largest = consecutivePrimeSum
            maxCount = count
            print(largest, i, j, consecutivePrimeSum, count)


print(largest)
