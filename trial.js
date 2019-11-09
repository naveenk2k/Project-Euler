//NOTE: Code to get input
// function processData(input) {
//     //Enter your code here
//     console.log(input);
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//     processData(_input);
// });

// let x = 120n ** 100n;
// console.log(x);
// let y = BigInt(122);
// console.log(typeof y)

function* f(n) {
    if (n % 2 !== 0)
        return false;
    else {
        yield true;
        return n + 1;
    }
}

const fn = f(2);
console.log(fn.next());
console.log(fn.next());