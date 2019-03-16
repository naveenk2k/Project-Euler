function factorial(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

let count = 0;

function sofi(n) {
    for (let m = 2; m <= n; m++) {
        if (factorial(m) % n === 0) {
            return m;
        }
    }
    //    return n;
}

console.log(sofi(23));

// for (let i = 2; i <= 100; i++) {
//     count = count + sofi(i);
//     console.log(i, sofi(i), count);
//
// }