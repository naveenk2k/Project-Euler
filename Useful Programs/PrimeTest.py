# Prime Test


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


print(isPrime(41))
