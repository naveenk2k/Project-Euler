'''
QUESTION: Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that 2/5 is the fraction immediately to the left of 3/7.

By listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.

ANSWER: 428570 (~0.07)
'''

from fractions import Fraction
'''
f = []
limit = 1000
for i in range(1, limit + 1):
	for j in range(1, int(i/2)):
		if j / i <= 0.42857142857142855:
			f.append((j / i, str(Fraction(j/i).limit_denominator())))

f = list(set(f))
f.sort(key = lambda x: x[0])
indexof3by7 = f.index((0.42857142857142855, '3/7'))
print(f[indexof3by7 - 1])
'''

#found answer completely manually by subtracting a larger number from x till it wasn't equal to 3/7 anymore. Find better solution!
x = 0.42857142857142857
x-= 0.00000010000000000
print(Fraction(x).limit_denominator())

'''
num = 3
count = 0
while count <= 300000:
	x = x - 0.00000000000000001
	f = Fraction(x).limit_denominator()
	num = str(f).split('/')[0]
	print(num)
	count+=1
'''
