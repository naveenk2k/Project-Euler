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

const solve = (n, a) => {
    if (n < 3)
        return BigInt(a[n]);

    if (!a[n])
        a[n] = BigInt(solve(n - 1, a) + solve(n - 2, a) + solve(n - 3, a) + BigInt((1 << n - 3)));

    return a[n];
};

//1106472935945524

let n = 50;
let a = [];
for (let i = 0; i < n + 1; i++) {
    a[i] = BigInt(0);
}

const ans = [];
for (let i = 0; i <= 60; i++)
    ans.push(solve(i, a));

console.log(ans, ans.length);

/*
{
    "0", "0", "0",
        "1", "3", "8",
        "20", "47", "107",
        "238", "520", "1121",
        "2391", "5056", "10616",
        "22159", "46023", "95182",
        "196132", "402873", "825259",
        "1686408", "3438828", "6999071",
        "14221459", "28853662", "58462800",
        "118315137", "239186031", "483072832",
        "974791728", "1965486047", "3960221519",
        "7974241118", "11752465036", "23686927674",
        "43413633830", "78853026544", "145953588056",
        "268220248446", "493026863078", "907200699644",
        "1668447811296", "3068675374274", "5644323885726",
        "10381447072320", "19094446334368", "35120217296510",
        "64596110711390", "118810774358652", "218527102399320",
        "401933987534898", "739271864423942", "1359732954620304",
        "2500938807103432", "4599943627196254", "8460615391017142",
        "15561497829511132", "28622056856113136", "52644170093418626",
        "96827724812597326"
};

*/