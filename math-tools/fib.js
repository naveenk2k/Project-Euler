// Using a for loop - O(n)
// Much faster than memoization approach. Use this if you just need the nth Fibonacci number.
// Remove the 'n' if you don't need big integers
function fib(num) {
    if (num <= 2) {
        return 1n;
    }
    let n1 = 1n,
        n2 = 1n,
        total;
    for (let i = 3; i <= num; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
    }
    return total;
}

exports.fib = fib;

/*
// Using Memoization and recursion
// Use this if you need to keep track of intermediate fibonacci numbers
let fibArray = [];
fibArray[0] = 0n;
fibArray[1] = 1n;

function fib(n) {
    if (fibArray[n] >= 0) return fibArray[n];
    else {
        fibArray[n] = fib(n - 1) + fib(n - 2);
        return fibArray[n];
    }
}
*/