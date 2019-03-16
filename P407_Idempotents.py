def M(n):
    for i in range(n - 1, 0, -1):
        if (i * i) % n == i:
            return i
    return 0

sum  = 0
for i in range(1, 10 ** 7):
    sum += M(i)

print(sum)