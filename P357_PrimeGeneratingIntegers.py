# function getProperDivisors(n) {
#     let divisors = [];
#     for (let i = 1; i <= Math.sqrt(n); i++) {
#         if (n % i === 0) {
#             divisors.push(i);
#             divisors.push(n / i);
#         }
#     }
#     return divisors.sort((a, b) => a - b);
# }

# function isPrime(n) {
#     if (n <= 1 || n % 2 == 0) {
#         return false; //1 isn't prime
#     } else if (n == 2) {
#         return true;
#     } else {
#         let limit = Math.sqrt(n);
#         for (let i = 3; i <= limit; i += 2) { //checking all numbers less than sqrt(n) for factors
#             if (n % i === 0) {
#                 return false;
#             }
#         }
#         return true;
#     }
# }

# let sum = 0;
# for (let i = 10 ** 6; i < 10 ** 7; i++) {
#     let divisors = getProperDivisors(i);
#     let satisfies = true;
#     for (let divisor of divisors) {
#         if (!isPrime(divisor + i / divisor)) {
#             satisfies = false;
#             break;
#         }
#     }
#     if (satisfies) sum += i;
# }

# //till 10 ** 6 = 524402304

sum1 = 0;
for i in range(100):
    divisors =