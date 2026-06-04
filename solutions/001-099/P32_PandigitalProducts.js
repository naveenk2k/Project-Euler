/* QUESTION: We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

ANSWER: 45228 (0.7s)
*/

function isPandigital(n) {
    let a = new Array(9);
    a.fill(false, 0, 9);
    n = n.toString().split('').map(Number);
    for (let x of n) {
        a[x - 1] = true;
    }
    for (let bool of a) {
        if (bool == false) return false;
    }
    return true;
}

let products = new Set();

for (let i = 10; i < 10000; i++) {
    for (let j = 1; j < i && (i.toString() + j.toString() + (i * j).toString()).length <= 9; j++) {
        let p = i * j;
        let product = i.toString() + j.toString() + p.toString();
        if (product.length == 9 && isPandigital(product)) {
            products.add(p);
        }
    }
}

products = Array.from(products)
let sum = products.reduce((a, b) => a + b, 0)
console.log(products, sum);