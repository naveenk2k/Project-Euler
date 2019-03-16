/* QUESTION: Find the number of integers 1 < n < 107, for which n and n + 1 have the same number of positive divisors. For example, 14 has the positive divisors 1, 2, 7, 14 while 15 has 1, 3, 5, 15.

ANSWER: 986262 (~2.7s)
*/

//LOGIC: Fills the array with '1' which are the number of divisors at the index. Currently, it's 1 for that exact number. 2 is a divisor of 2, then comes 4, 6, etc. Then for each number, increment the index of all it's multiples using a nested for loop.
//Finally, check how many index have the same value as the index next to it.

let limit = 10 ** 7;
let a = Array(limit).fill(1, 1);    //fill with '1' for all index starting with '1'. Index zero doesn't count.
for (let i = 2; i < limit; i++) {
    for (let j = i; j < limit; j += i) {
        a[j]++;
    }
}

let count = 0;
for (let i = 0; i < limit; i++) {
    if (a[i] == a[i + 1]) {
        count++;
    }
}

console.log(count);