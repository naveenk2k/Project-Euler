'''
QUESTION: The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

ANSWER: 837799
'''

# NOTE: Brute Force Method (Takes 50 seconds)

n = 1
maxTerm = 1
maxLen = 0
while n < 1000000:
	arr = []
	x = n
	while x != 1:
		if x & 1 == 0:
			x = x / 2
		else:
			x += (x << 1) + 1
		arr.append(x)
	if len(arr) > maxLen:
		maxLen = len(arr)
		maxTerm = n
	# print (n, arr)
	n += 1


print (maxTerm)
