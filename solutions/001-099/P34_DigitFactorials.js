/* QUESTION:
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
Find the sum of all numbers which are equal to the sum of the factorial of their digits.
Note: as 1! = 1 and 2! = 2 are not sums they are not included.

ANSWER: 40730 (~0.2s)
*/

function factorial(n) {
   if (n === 1 || n === 0) return 1;
   while (n > 1) {
      return n * factorial(n - 1);
   }
}

function getDigits(n) {
   return n.toString().split('').map(Number);
}

let arr = [];

function check(n) {
   let factSum = 0;
   let digits = getDigits(n);
   for (let digit of digits) {
      factSum += factorial(digit);
   }
   if (n === factSum) {
      arr.push(n);
      return true;
   } else return false;
}

let sum = 0;
for (let i = 10; i < 100000; i++) {
   if (check(i)) {
      sum += i;
   }
}

console.log(arr, sum);
