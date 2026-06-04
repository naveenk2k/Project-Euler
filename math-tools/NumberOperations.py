# QUESTION: Implement addition using arrays

a = '999'
b = '1'


def add(a, b):
    sumArr = []
    num1 = list(a)
    num2 = list(b)

    if len(num1) > len(num2):
        while len(num2) < len(num1):
            num2.insert(0, '0')
    elif len(num2) > len(num1):
        while len(num1) < len(num2):
            num1.insert(0, '0')

    num1 = list(map(int, num1))
    num2 = list(map(int, num2))

    for i in range(len(num1) - 1, -2, -1):
        s = num1[i] + num2[i]
        if s >= 10 and num1[i - 1] >= 0:
            sumArr.insert(0, list(str(s))[1])
            num1[i - 1] += int(list(str(s))[0])
        elif s < 10 or (not num1[i - 1]):
            sumArr.insert(0, s)

    sumArr = map(str, sumArr)
    return ''.join(sumArr)


print(add(a, b))


def multiply(a, b):
    mulArr = []
    num1 = list(a)
    num2 = list(b)

    if len(num1) > len(num2):
        while len(num2) < len(num1):
            num2.insert(0, '0')
    elif len(num2) > len(num1):
        while len(num1) < len(num2):
            num1.insert(0, '0')

    num1 = list(map(int, num1))
    num2 = list(map(int, num2))
