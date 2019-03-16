# Euclid's method
def gcd(m, n):
    if type(m) != int:
        return 'Error'
    if m == n:
        return m
    elif m > n:
        return gcd(m - n, n)
    else:
        return gcd(m, n - m)


# Needs GCD function to work
def lcm(m, n):
    return int(n * m / gcd(m, n))
