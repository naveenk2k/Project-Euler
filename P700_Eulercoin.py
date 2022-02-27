'''
TODO:
Bruteforce takes too long. Need to find the inverse of MOD maybe.

Answer is 1517926220024813 considering the first 1e8 multiples of 'x'.

See:
https://urmaul.com/blog/solution-for-project-euler-problem-700/
'''

x = 1504170715041707
MOD = 4503599627370517

min = x
sum = x
print(x, sum, 1)

n = int(1e5)

for i in range(2, n+1):
    next = ((x % MOD) * (i % MOD)) % MOD
    if next < min:
        min = next
        sum += next
        print(next, sum, i)

# 1517926220024813 till 1e8

