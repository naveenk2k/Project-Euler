fibArray = {}
fibArray[0] = 0
fibArray[1] = 1


def fib(n):
    if n in fibArray.keys():
        return fibArray[n]
    else:
        fibArray[n] = fib(n - 1) + fib(n - 2)
        return fibArray[n]


print(fib(8))
