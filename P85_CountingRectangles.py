'''
QUESTION: By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles.

Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.

ANSWER: 2772 (~0.07s)
'''

# chosen somewhat arbitrarily
start = 10
end = 100

# formula to find number of rectangles in a mxn grid: ((m x (m + 1)) / 2) * ((n x (n + 1)) / 2)


def get_total_rectangles(m, n):
    return int((m * (m + 1) * n * (n + 1) / 4))


# chosen somewhat arbitrarily
diff = 10000

# LOGIC: Try different values of 'm' and 'n' and see how many rectangles we can form from them. Calculate the difference from 2 million. Our correct values of 'm' and 'n' are those which produce the least difference.
for i in range(start, end):
    for j in range(start, i):
        a = get_total_rectangles(i, j)
        if abs(2000000-a) < diff:
            diff = abs(2000000-a)
            print(i, j, a, diff,  i * j)
