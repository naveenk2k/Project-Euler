// const f = require('./Useful Programs/fib');
// console.log(f.fib(10));

// console.log('abc'.);


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

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// let a = 3;
// console.log((a++)++)

// console.log("This is %d", "40");
// console.table([1, 2, 3]);
const code = 5;
console.error('error #%d', code);
console.time('loop');
for (let i = 0; i < 100; i++);
console.timeLog('loop');
for (let i = 0; i < 100; i++);
console.timeEnd('loop');