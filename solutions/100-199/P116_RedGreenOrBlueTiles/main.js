totalTiles // gives correct output of 12 for tiles = 5

let totalTiles = 5;
let redTiles = 2;
let greenTiles = 3;
let blueTiles = 4;
let sum = 0;

// finding how many tiles there are essentially (by considering the coloured tiles as 1)
// then check i >= j and also coloures tiles shouldn't exceed total number of tiles
for (let i = totalTiles - redTiles + 1, j = 1; i >= j && redTiles * j <= totalTiles; i--, j++) {
    console.log(i, j);
    sum += Combinatorics.C(i, j);
}

console.log('\n');

for (let i = totalTiles - greenTiles + 1, j = 1; i >= j && greenTiles * j <= totalTiles; i--, j++) {
    console.log(i, j);

    sum += Combinatorics.C(i, j);
}

console.log('\n');


for (let i = totalTiles - blueTiles + 1, j = 1; i >= j && blueTiles * j <= totalTiles; i--, j++) {
    console.log(i, j);
    sum += Combinatorics.C(i, j);
}
console.log('\n');

console.log(sum);