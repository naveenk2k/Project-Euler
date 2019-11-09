/*
Question:
We shall define a square lamina to be a square outline with a square "hole" so that the shape possesses vertical and horizontal symmetry. For example, using exactly thirty - two square tiles we can form two different square laminae:
9^2 - 7^2 and 6^2 - 2^2.

With one-hundred tiles, and not necessarily using all of the tiles at one time, it is possible to form forty-one different square laminae.

Using up to one million tiles how many different square laminae can be formed ?

Answer: 1572729 (~15ms)
*/

/*
Logic:
Given a square of length 'i', a hollow laminae can be formed by cutting out squares of length 'i-2', 'i-4', 'i-6', ...,3, 1 from it, each time requiring more tiles than before.
So, when we reach a point where we exceed the given number of tiles, we break and try with the next higher length initial square.
*/

console.time('Time');

const getNumberOfTiles = (larger, smaller) => (larger * larger) - (smaller * smaller);

const limit = 10 ** 6;
let count = 0;

for (let i = 3; i < limit; i++) {
    let j = i - 2;
    while (j > 0) {
        let tiles = getNumberOfTiles(i, j);
        if (tiles <= limit) {
            count++;
            j -= 2;
        } else {
            break;
        }
    }
}

console.log('count :', count);

console.timeEnd('Time');