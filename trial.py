[   [0, 0,  0,  0,  0,  0,  0],
    [0, 10, 10, 10, 10, 10, 10],
    [0, 10, 20, 30, 30, 30, 30],
    [0, 10, 20, 30, 40, 50, 60],
    [0, 10, 20, 30, 40, 50, 60]
]

# Knapsack
# Returns the maximum value that can be put in a knapsack of capacity W

K = []


def knapSack(W, wt, val, n):
    K = [[0 for x in range(W+1)] for x in range(n+1)]

    # Build table K[][] in bottom up manner
    for i in range(n+1):
        for w in range(W+1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i-1] <= w:
                K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w])
            else:
                K[i][w] = K[i-1][w]

    return K[n][W]


def reconstruct(i, w):  # reconstruct subset of items 1..i with weight <= w
                        # and value f[i][w]
  if i == 0:
      # base case
      return {}
  if K[i][w] > K[i-1][w]:
      # we have to take item i
      return {i} | reconstruct(i-1, w - weight_of_item(i))
  else:
      # we don't need item i
      return reconstruct(i-1, w)


n, b = list(map(int, input().split(' ')))
skillLevels = list(map(int, input().split(' ')))
prices = list(map(int, input().split(' ')))


soln = knapSack(b, prices, skillLevels, n)
print(reconstruct(n, b))
