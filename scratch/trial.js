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

/*
ull solve(int n, ull *a) {
	if (n < 3)
		return a[n];
	
	if (!a[n]) {
		a[n] = solve(n-1, a) + solve(n-2, a) + solve(n-3, a) + (1 << n-3);
	}

	return a[n];
}
*/