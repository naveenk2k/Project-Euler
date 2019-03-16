'''
QUESTION: It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

12 cm: (3,4,5)
24 cm: (6,8,10)
30 cm: (5,12,13)
36 cm: (9,12,15)
40 cm: (8,15,17)
48 cm: (12,16,20)

In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.

120 cm: (30,40,50), (20,48,52), (24,45,51)

Given that L is the length of the wire, for how many values of L ≤ 1,500,000 can exactly one integer sided right angle triangle be formed?

ANSWER: 161667
First generate all pythagorean triplets till 1.5mil. Store them into a txt file.
Then read that file and format the data into a readable form.
Create a dict with keys as length 'L' and value as the number of triplets that sum to 'L'
Iterate through the values, if it is equal to 1, increment a count.

# NOTE: This is a bad bad way to solve this problem. In the future, use a = u^2 - v^2, b = u^2 + v^2, c = 2uv method for generating pythagorean triplets
'''

'''
# Generates all triplets till 1, 500, 000  using numpy and stores into a txt file (takes 170s)

import numpy as np
def gen_prim_pyth_trips(limit=None):
    u = np.mat(' 1  2  2; -2 -1 -2; 2 2 3')
    a = np.mat(' 1  2  2;  2  1  2; 2 2 3')
    d = np.mat('-1 -2 -2;  2  1  2; 2 2 3')
    uad = np.array([u, a, d])
    m = np.array([3, 4, 5])
    while m.size:
        m = m.reshape(-1, 3)
        if limit:
            m = m[m[:, 2] <= limit]
        yield from m
        m = np.dot(m, uad)


def gen_all_pyth_trips(limit):
    for prim in gen_prim_pyth_trips(limit):
        i = prim
        for _ in range(limit//prim[2]):
            yield i
            i = i + prim


f = open('/Users/naveen/Desktop/Naveen/Other/Programming/Project Euler/P75/triplets.txt', 'w')
triplets = []
for item in gen_all_pyth_trips(1500000):
    f.write(str(item) + '\n')

f.close()
'''


# Calculates the answer in ~20s
f = open('/Users/naveen/Desktop/Naveen/Other/Programming/Project Euler/P75/triplets.txt', 'r')


lines = f.readlines()
f.close()
for i in range(len(lines)):
    lines[i] = lines[i].strip()  # removing white spaces at start and end
    lines[i] = lines[i][1:-1]  # removing brackets
    lines[i] = lines[i].strip()  # further removing whitespaces
    lines[i] = lines[i].split(' ')
    lines[i] = list(filter(lambda x: x.isalnum(), lines[i]))
    lines[i] = list(map(int, lines[i]))

# keeping only those triplets which sum to less than 1,500,000
triplets = list(filter(lambda x: x[0] + x[1] + x[2] <= 1500000, lines))
d = {}
for triplet in triplets:
    sum = triplet[0] + triplet[1] + triplet[2]
    if sum not in d:
        d[sum] = 0
    d[sum] += 1
count = 0
for n in d.values():
    if n == 1:
        count += 1

print(count)
