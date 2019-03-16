def isPandigital(n):
    a = [False] * 9
    n = list(map(int, list(str(n))))
    for d in n:
        a[d - 1] = True
    for bool in a:
        if bool == False:
            return False
    return True
