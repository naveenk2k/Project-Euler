def isBouncy(n):
	inc = 0
	dec = 0
	n = list(str(n))
	n = [int(x) for x in n]
	#n = map(int, n)
	for i in range(0, len(n) - 1):
		if n[i] > n[i + 1]:
			dec += 1
		elif n[i] < n[i + 1]:
			inc += 1

		if dec and inc:
			return True
			break
	return False

count = 277032
for i in range(10 ** 10, 10 ** 100):
	if (not isBouncy(i)):
		count += 1

print (count)
