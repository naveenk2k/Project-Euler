import math

def isPrime(n):
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

def getLargestPrimeFactor(n):
    if isPrime(n):
        return n
    if n <= 0:
        return 'Zero Error'
    factors = []
    while n % 2 == 0:
        factors.append(2)
        n = n / 2
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        while n % i == 0:
            factors.append(i)
            n = n / i
    if n > 2:
        #if (new) n itself is prime
        factors.append(int(n))
    return factors


limit = 10 ** 7
n = 5
count = 1

# for i in range(2, limit + 1):
#     if getLargestPrimeFactor(i) <= n:
#         count += 1


print(getLargestPrimeFactor(28))