/* QUESTION: The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.

ANSWER: 16695334890
*/

let numArray = Combinatorics.permutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let sum = 0;

function isSubStringDivisible(n) {
    let digits = n.toString().split('');
    if (Number(digits.slice(1, 4).join('')) % 2 === 0 && Number(digits.slice(2, 5).join('')) % 3 === 0 && Number(digits.slice(3, 6).join('')) % 5 === 0 && Number(digits.slice(4, 7).join('')) % 7 === 0 && Number(digits.slice(5, 8).join('')) % 11 === 0 && Number(digits.slice(6, 9).join('')) % 13 === 0 && Number(digits.slice(7, 10).join('')) % 17 === 0) {
        return true;
    }
}

for (let num of numArray.toArray()) {
    if (isSubStringDivisible(Number(num.join('')))) {
        sum += Number(num.join(''));
    }
}

console.log(sum);