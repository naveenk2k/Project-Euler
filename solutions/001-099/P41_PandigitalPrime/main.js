/* QUESTION: We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?

ANSWER: 7652413
*/

let numbers = [];
let found = false;

//gets all permutations after removing even numbers (which can't be prime)
let per = Combinatorics.permutation([1, 2, 3, 4, 5, 6, 7]).filter((a) => {
    return a[a.length - 1] % 2 != 0;
}).forEach((a) => {
    numbers.push(Number(a.join('')));
});

numbers.sort(function(a, b) {
    return a - b;
});

for (let i = numbers.length - 1; i >= 0; i--) {
    if (isPrime(numbers[i])) {
        console.log(numbers[i]);
        found = true;
        break;
    }
}

if (!found) {
    console.log('Not found');
}