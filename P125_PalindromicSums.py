'''
QUESTION: The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 62 + 72 + 82 + 92 + 102 + 112 + 122.

There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these palindromes is 4164. Note that 1 = 02 + 12 has not been included as this problem is concerned with the squares of positive integers.

Find the sum of all the numbers less than 108 that are both palindromic and can be written as the sum of consecutive squares.

ANSWER: 2906969179 (~0.6s)
'''

limit = 100000000
sqrtLimit = round(limit ** 0.5)
sum = 0
a = set()


def isPalindrome(n):
    return str(n) == str(n)[::-1]


'''Brute force method:
Outer loop sets the max 'n' and inner loop generates all values 1^2 + 2^2 + ... + n^2 and at each step checks for palindromicity also that the number isn't repeated 
'''
for i in range(1, sqrtLimit):
    num = i * i
    for j in range(i + 1, sqrtLimit):
        num += j * j
        if num > limit:
            break
        if isPalindrome(num) and num not in a:
            sum += num
            a.add(num)

print(sum)
