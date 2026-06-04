# -*- coding: utf-8 -*- 
# Need the above line to indicate that there are UTF-8 characters in this file (the tetration symbol)
'''
Question:
The hyperexponentiation or tetration of a number a by a positive integer b, denoted by a↑↑b, is recursively defined by:

a↑↑1 = a,
a↑↑(k+1) = a(a↑↑k).

Thus we have e.g. 3↑↑2 = 33 = 27, hence 3↑↑3 = 327 = 7625597484987 and 3↑↑4 is roughly 103.6383346400240996*10^12.

Find the last 8 digits of 1777↑↑1855.

Answer: 95962097 (~0.06s)
'''

'''
Logic:
My solution uses the recursive function given here:
https://googology.wikia.org/wiki/Tetration

This works because the base of the tetration 1777↑↑1855 (1777) is coprime with the base of 10 for decimal numbers.

Also read the wikipedia link for more information:
https://en.wikipedia.org/wiki/Tetration
'''

x = 1777
y = 1855    # not even required to solve this
b = 10
digits = 8
mod = pow(b, digits)

def N(m):
    if m == 0:
        return 1
    else:
        return pow(x, N(m - 1), mod)

print(N(digits))