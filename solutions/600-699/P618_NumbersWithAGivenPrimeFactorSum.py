import math

fibArray = {}
fibArray[0] = 1
fibArray[1] = 1


def fib(n):
    if n in fibArray.keys():
        return fibArray[n]
    else:
        fibArray[n] = fib(n - 1) + fib(n - 2)
        return fibArray[n]


def primeFactors(n):
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
        factors.append(int(n))

    return factors


def S(k):
    limit = 100
    s = 0
    for i in range(2, limit):
        if sum(primeFactors(i)) == k and primeFactors(i)[-1] <= k:
            s += i
        else:
            break
    return s


s = {}
count_of_factors = 0
i = 2
while count_of_factors < 100:
    s[i] = sum(primeFactors(i))
    i += 1
    count_of_factors = len(primeFactors(i))

print(len(s))
