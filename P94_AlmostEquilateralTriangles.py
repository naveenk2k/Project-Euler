#Hint: Read about Pell's equation and implement using Area as perpendicular * height etc, not heron's formula
def area(a, b, c):
    s = getPerimeter(a, b, c) / 2
    area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
    return area


def isAlmostEquilateral(a, b, c):
    if a < 1 or b < 1 or c < 1:
        return False
    s = getPerimeter(a, b, c) / 2
    return int((s * (s - a) * (s - b) * (s - c)) ** 0.5) == area(a, b, c)


def getPerimeter(a, b, c):
    return a + b + c


i = 1
p = 0
while (i + i + i + 1) < 100:
	print(i)
	if (i - 1) % 16 == 0 and ((i + 1)**2) % 16 == 0 and ((3 * i + 1) % 16 == 0):
		print(i, i, i + 1, area(i, i, i + 1))
		p += getPerimeter(i, i, i + 1)
	if ((i - 1)**2) % 16 == 0 and (i + 1) % 16 == 0 and ((3 * i - 1) % 16 == 0):
		print(i, i, i - 1, area(i, i, i - 1))
		p += getPerimeter(i, i, i - 1)
	i += 1

print(p)

# 1000000000
# 1624521 + 13071954573 + 126023996803502
