// https://www.cut-the-knot.org/arithmetic/ShortEquationInReciprocals.shtml#solution

// https://codesciencelove.wordpress.com/2014/08/03/number-of-solutions-to-the-diophantine-reciprocal-problem/

const a = [];

const limit = 10 ** 4;
const target = 1000;

// const solution = () => {
//     for (let i = 1; i < limit; i++) {
//         for (let j = 1; j < limit; j++) {
//             const n = (i * j) / (i + j);
//             if (Number.isInteger(n)) {
//                 if (!a[n])
//                     a[n] = 1;
//                 else {
//                     a[n]++;
//                     if (a[n] > target)
//                         return n;
//                 }
//             }
//         }
//     }
//     return 'Not found';
// };


const solution = () => {
    for (let k = 1; k < limit; k++) {
        for (let m = 1; m < limit; m++) {
            for (let n = 1; n < limit; n++) {
                let z = k * m * n;
                if (!a[z])
                    a[z] = 1;
                else {
                    a[z]++;
                    if (a[z] > target) {
                        console.log(z, a[z]);
                        return z;
                    }
                }
            }
        }
    }
};

console.log(solution());
a.filter((x, i) => {
    if (x > target) {
        console.log(i);
        return true;
    }
})
// console.log(a);
// console.log(Math.max(...a));