/* QUESTION: Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.

We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.

Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.

Find the least number for which the proportion of bouncy numbers is exactly 99%.

ANSWER: 1587000 (Takes ~900ms)
*/

console.time('time');

function isBouncy(n) {
    let inc = 0;
    let dec = 0;
    n = n
        .toString()
        .split('')
        .map(Number);
    for (let i = 0; i < n.length; i++) {
        if (n[i] > n[i + 1]) {
            dec++;
        } else if (n[i] < n[i + 1]) {
            inc++
        }
        if (dec && inc) {
            return true;
        }
    }
    return false;
}

let count = 0;
let limit = 1587000; //found limit by manually narrowing the range (guessing xD)

for (let i = 100; i <= limit; i++) {
    if (isBouncy(i)) count++;
}

console.log(count, limit, (count / limit) * 100);
console.timeEnd('time'); 