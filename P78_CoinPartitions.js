/*
Question:
Let p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.

OOOOO
OOOO   O
OOO   OO
OOO   O   O
OO   OO   O
OO   O   O   O
O   O   O   O   O

Find the least value of n for which p(n) is divisible by one million.

Answer: 55374 (~450ms)
*/

/*
Logic:
I made use of the Pentagonal Number Theorem (originally by Euler):
https://en.wikipedia.org/wiki/Pentagonal_number_theorem#Relation_with_partitions

p(n) = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + ...

In the above recurrance, for any i'th term 'p(n-k)', 'k' is the i'th generalized pentagonal number.
Further, there are two arrays to store the sequences (memoization) so that recursion is not too expensive.
*/

console.time('Time');

const partitions = [];
const generalizedPentagonals = [];

const getNthGeneralizedPentagonal = n => {

    if (!generalizedPentagonals[n]) {
        let k = Math.ceil(n / 2);
        if (n % 2 === 0)
            k *= -1;
        generalizedPentagonals[n] = (k * (3 * k - 1)) / 2;
    }

    return generalizedPentagonals[n];
};

const getNthPartition = n => {
    if (n < 0)
        return 0;

    if (n === 0)
        return 1;

    if (!partitions[n]) {
        partitions[n] = 0;

        // Implementation of the formula given above
        let i = 1;
        let k = getNthGeneralizedPentagonal(i);
        while ((n - k) >= 0) {
            if (i % 4 === 1 || i % 4 === 2)
                partitions[n] += getNthPartition(n - k);
            else
                partitions[n] -= getNthPartition(n - k);

            i++;
            k = getNthGeneralizedPentagonal(i);
        }
    }

    partitions[n] %= 10 ** 6;
    return partitions[n];
};

const solve = () => {
    let found = false;
    let i = 0;
    while (!found) {
        if (getNthPartition(i) === 0) {
            console.log(i);
            found = true;
        }
        i++;
    }
};

solve();
console.timeEnd('Time');