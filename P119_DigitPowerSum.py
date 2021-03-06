'''
QUESTION: The number 512 is interesting because it is equal to the sum of its digits raised to some power: 5 + 1 + 2 = 8, and 8^3 = 512. Another example of a number with this property is 614656 = 28^4.

We shall define an to be the nth term of this sequence and insist that a number must contain at least two digits to have a sum.

You are given that a2 = 512 and a10 = 614656.

Find a30.

ANSWER: 248155780267521 (0.2s)
'''

numbers = []

# Computes i**j and then checks if the digital sum of that number == i
for i in range(2, 100):
    for j in range(2, 50):
        number = i ** j
        sum_of_digits = sum(map(int, list(str(number))))
        if sum_of_digits == i:
            numbers.append(number)

numbers = sorted(numbers)
print(numbers[29])
