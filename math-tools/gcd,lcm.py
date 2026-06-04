# Euclid's method
# Recursive
def gcd(m, n):
    if type(m) != int:
        return 'Error'
    if m == n:
        return m
    elif m > n:
        return gcd(m - n, n)
    else:
        return gcd(m, n - m)

# Iterative
def gcd(a, b):
    while b != 0:
        t = b
        b = a % b
        a = t
    return a


print(gcd(12, 30))

# Needs GCD function to work
def lcm(m, n):
    return int(n * m / gcd(m, n))
