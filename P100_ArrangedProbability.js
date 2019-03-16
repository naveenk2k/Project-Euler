# for (let i = 10 ** 12; i < 10 ** 13; i++) {
#     let b = (1 + ((1 + 2 * i * (i - 1)) ** 0.5)) / 2;
#     if (b % 1 == 0) {
#         console.log(b, i);
#     }
# }


# calculate the formula again. there's a problem with the square root which is making it not pick up 85-120 pair too.
for i in range(2, 300):
    b = (1 + ((1 + 2 * i * (i - 1)) ** 0.5)) / 2
    if b == int(b):  # and (b - 1) / (i - 1) * (b / i) == 0.5:
        print(int(b), i, (b - 1) / (i - 1) * (b / i))
