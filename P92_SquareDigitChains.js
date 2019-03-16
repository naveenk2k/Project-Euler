/*
QUESTION: A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.
For example,
44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

ANSWER: 8581146 (~35s)
*/

let count = 0;

function nextNum(n) {
    let num = n.toString().split('');
    num = num.map(Number);
    let newNum = 0;
    num.forEach(n => {
        newNum += Math.pow(n, 2);
    });
    return newNum;
}

for (let i = 1; i < 10000000; i++) {
    let arr = [];
    arr.push(i);
    let n = i;
    while (n != 89 && n != 1) {
        n = nextNum(n);
        arr.push(n);
    }
    if (arr[arr.length - 1] === 89) {
        count++;
    }
}

console.log(count);