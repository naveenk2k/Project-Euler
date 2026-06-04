/* QUESTION: Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

ANSWER: 932718654 (~60ms)
*/

console.time('start');

function getPandigitalConcatenatedProduct(number, limit) {
    let product = '';
    for (let i = 1; i <= limit; i++) {
        const n = number * i;
        product += n.toString()
    }
    return Number(product)
}

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

let max = 0;

// 10,000 is somewhat random. I tried 1,000 but this gave the trivial 918273645 answer so I increased my range. Further increase from 10,000 made no difference.
for (let i = 1; i < 10000; i++) {
    let j = 0;
    while (getPandigitalConcatenatedProduct(i, j).toString().length < 10) {
        let num = getPandigitalConcatenatedProduct(i, j);
        if (isPandigital(num) && num > max) {
            max = num;
        }
        j++;
    }
}

console.log(max);
console.timeEnd('start')