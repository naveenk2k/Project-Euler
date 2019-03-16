'''
QUESTION: The cube, 41063625 (3453), can be permuted to produce two other cubes: 56623104 (3843) and 66430125 (4053). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

Find the smallest cube for which exactly five permutations of its digits are cube.

ANSWER: 127035954683 (~5s)
'''

cubes = {}

for n in range(1000, 10000):
    cubes[n] = list(sorted(str(n * n * n)))

# Brute force way (Generating cubes and then checking if there are 5 more which use the same digits)
for n1, cube1 in cubes.items():
    count = 0
    for n2, cube2 in cubes.items():
        if cube1 == cube2:
            count += 1
    if count == 5:
        print(n1 ** 3)
        break
