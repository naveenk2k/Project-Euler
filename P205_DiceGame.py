# Logic is too basic and it would take too long to iterate over all 46656 x 262144 possibilities and compare

#Generating the sample spaces

cubic = []
for i in range(1, 7):
    for j in range(1, 7):
        for k in range(1, 7):
            for l in range(1, 7):
                for m in range(1, 7):
                    for n in range(1, 7):
                        cubic.append([i, j, k, l, m, n])

pyramidal = []
for i in range(1, 5):
    for j in range(1, 5):
        for k in range(1, 5):
            for l in range(1, 5):
                for m in range(1, 5):
                    for n in range(1, 5):
                        for o in range(1, 5):
                            for p in range(1, 5):
                                for q in range(1, 5):
                                    pyramidal.append([i, j, k, l])



cubic = [(sum(a), a) for a in cubic]
pyramidal = [(sum(a), a) for a in pyramidal]

print(len(cubic))
print(len(pyramidal))
print(pyramidal[0])
