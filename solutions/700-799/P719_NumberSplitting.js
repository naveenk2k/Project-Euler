// TODO:

/*
Question:
https://projecteuler.net/problem=719

Answer: 
*/

/* 
Logic:

sqrt(81) = 9 = 8 + 1
sqrt(6724) = 82 = 6 + 72 + 4
sqrt(8281) = 91 = 8 + 2 + 81 = 82 + 8 + 1
sqrt(9801) = 99 = 98 + 0 + 1



// Find all possible consecutive combinations of the number:
[ '6', '7', '2', '4' ]

// Find all place where '+' sign can go
Can always put n-1 '+' signs at the max

(n-1) '+' signs = C(n-1,n-1) ways
6+7+2+4

(n-2) '+' signs = C(n-1,n-2) ways 
6+7+24
6+72+4
67+2+4

(n-3) '+' signs = C(n-1, n-3)
6+724
67+24
672+4


*/

const combinatorics = require('../../math-tools/combinatorics');


const N = 1;
// const N = 1e4;
for (let i = 4; i * i <= N; ++i) { // starting at 4 cause we need to be able to split the square of 'i' into at least 2 parts and 4x4=16 but 3x3=9
    const n = i * i;
    splitAndCheck(n, i);
}


const splitAndCheck = (n, i) => {

    n = n.toString().split('');
    console.log('n :>> ', n);
}

splitAndCheck(6724, 82);

console.log(combinatorics.permutation(['6', '7', '2', '4']).toArray())

// {[6724], 3}
// {[6,724], 2} and {[6724], 3}
// {[6, 7, 24], 1} and {[6,724], 2}
// {[6, 7, 2, 4], 0} and {[6, 7, 24], 1}
const parts = [];
const backtrack = (nums, idx, x) => {
    if (x === 0) {
        parts.push(nums);
        return;
    }


}
