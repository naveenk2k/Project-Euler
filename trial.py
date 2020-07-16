# [[0, 0,  0,  0,  0,  0,  0],
#     [0, 10, 10, 10, 10, 10, 10],
#     [0, 10, 20, 30, 30, 30, 30],
#     [0, 10, 20, 30, 40, 50, 60],
#     [0, 10, 20, 30, 40, 50, 60]
#  ]

# # Knapsack
# # Returns the maximum value that can be put in a knapsack of capacity W

# K = []


# def knapSack(W, wt, val, n):
#     K = [[0 for x in range(W+1)] for x in range(n+1)]

#     # Build table K[][] in bottom up manner
#     for i in range(n+1):
#         for w in range(W+1):
#             if i == 0 or w == 0:
#                 K[i][w] = 0
#             elif wt[i-1] <= w:
#                 K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w])
#             else:
#                 K[i][w] = K[i-1][w]

#     return K[n][W]


# def reconstruct(i, w):  # reconstruct subset of items 1..i with weight <= w
#                         # and value f[i][w]
#     if i == 0:
#         # base case
#         return {}
#     if K[i][w] > K[i-1][w]:
#         # we have to take item i
#         return {i} | reconstruct(i-1, w - weight_of_item(i))
#     else:
#         # we don't need item i
#         return reconstruct(i-1, w)


# n, b = list(map(int, input().split(' ')))
# skillLevels = list(map(int, input().split(' ')))
# prices = list(map(int, input().split(' ')))


# soln = knapSack(b, prices, skillLevels, n)
# print(reconstruct(n, b))

'''
const solve = (n, a) => {
    if (n < 3)
        return a[n];

    if (!a[n])
        a[n] = solve(n - 1, a) + solve(n - 2, a) + solve(n - 3, a) + (1 << n - 3);

    return a[n];
}; 

let n = 60;
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = 0;
}

console.log(solve(n, a));
'''

def solve(n, a):
    if n < 3:
        return a[n]
    
    if not a[n]:
        a[n] = solve(n - 1, a) + solve(n - 2, a) + solve(n - 3, a) + (1 << n - 3)
    
    return a[n]

n = 61
a = [0 for i in range(0, n + 1)]

ans = []
for i in range(0, 61):
    ans.append(solve(i, a))

for x in ans:
    print("\"" + str(x) + "\",")

'''
'0', '0', '0', '1', '3', '8', '20', '47', '107', '238', '520', '1121', '2391', '5056', '10616', '22159', '46023', '95182', '196132', '402873', '825259', '1686408', '3438828', '6999071', '14221459', '28853662', '58462800', '118315137', '239186031', '483072832', '974791728', '1965486047', '3960221519', '7974241118', '16047432332', '32276862265', '64888470307', '130392634088', '261917705028', '525918286159', '1055667578747', '2118381476878', '4249723155672', '8523283839073', '17090411727175', '34261465233024', '68671253821480', '137615316826095', '275732407969431', '552387722794670', '1106472935945524', '2216068043420281', '4437878655581787', '8886319541790216', '17792066054477532', '35619863879220031', '71305448730228771', '142731777173408318', '285685886801821088', '571780706743386113', '1144313558794471391'
'''

1,144,313,558,794,471,391