'''
QUESTION: Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,
where each “_” is a single digit.

ANSWER: 1389019170 (0.05s)
'''


def match(s):
    s = list(map(int, list(str(s))))
    if (s[0] == 1 and s[2] == 2 and s[4] == 3 and s[6] == 4 and s[8] == 5 and s[10] == 6 and s[12] == 7 and s[14] == 8 and s[16] == 9 and s[18] == 0):
        return True
    return False


# number has to end in a zero cause it's square ends in a zero
# starting and ending limits are the minimum and maximum square roots of given problem, i.e root of 1020304050607080900 and 1929394959697989990
for i in range(1389026620, 1015101010, -10):
    if match(i * i):
        print(i, i*i)
        break
