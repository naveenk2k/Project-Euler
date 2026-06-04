limit = 6
for B in range(10**(limit - 2), 10**(limit)):
    for C in range(B + 1, 10 ** limit):
        for A in range(C + 1, 10 ** limit):
            D = A + B - C
            E = C - B
            F = A - C
            if (A - B - E + F == 0 and A + B - 2*D - E + F == 0 and A + B - C + D == 0 and A - E - D == 0 and B - C + E == 0 and B - D + F == 0 and C - D - E == 0):
                print(A, B, C, D, E, F)
