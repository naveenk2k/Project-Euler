'''
function isPandigital(n) {
    let a = new Array(9);
    a.fill(false, 0, 9);
    n = n.toString().split('').map(Number);
    for (let x of n) {
        a[x - 1] = true;
    }
    for (let bool of a) {
        if (bool == false) return false;
    }
    return true;
}

let fibArray = [];
fibArray[0] = 1;
fibArray[1] = 1;


function fib(n) {
    if (fibArray[n] >= 0) return fibArray[n];
    else {
        fibArray[n] = fib(n - 1) + fib(n - 2);
        return fibArray[n];
    }
}

console.log(fib(541));

console.log(fibArray[541].toString().split('').slice(-9));
'''
