import math

#SOME BS. Adds (7, 1) and (6, 1) for some shitass reason.
fractions = set()





def getReducedFraction(a, b):
    gcd = math.gcd(a, b)
    if gcd == 1:
        return (a, b)
    else:
        while gcd != 1:
            a = int(a / gcd)
            b = int(b / gcd)
            # print(gcd, a, b)
            gcd = math.gcd(a, b)
    return (a, b)

for i in range(1, 12000):
    for j in range(1, i):
        fractions.add(getReducedFraction(j, i))

# print(sorted(fractions))
print(len(fractions))
