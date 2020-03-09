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

let n = 7;

for (let i = 1; i < n + 1; i++) {
    for (let j = i; j < n + 1; j++) {
        process.stdout.write(`${j % (n + 1)}`);
    }
    for (let j = i - 1; j > 0; j--)
        process.stdout.write(`${j}`);

    console.log();
}