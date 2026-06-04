/* QUESTION: A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

Answer: 2783915460 (~25s)
*/

console.time('time')
let cmb = Combinatorics.permutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let per = cmb.toArray();
for (let i = 0; i < per.length; i++) {
    per[i] = Number(per[i].join(''));
}
per.sort(function(a, b) {
    return a - b;
});
console.log(per[999999]);
console.timeEnd('time')
