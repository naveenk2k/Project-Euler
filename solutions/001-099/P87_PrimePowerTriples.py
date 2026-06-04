'''
Takes 7s for limit = 1000
'''

answer = []
count = 0

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


primes = SieveOfEratosthenesArray(200)

print(primes)

for i in primes:
    for j in primes:
        for k in primes:
            num = (k**4 + j**3 + i**2)
            if num < 50000000 and num not in answer:
                answer.append(num)
                count += 1

print(count)
# 133450 (150s for primes till 450)
# 49912305
