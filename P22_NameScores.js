/*
QUESTION: : Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

ANSWER: 871198282 (~30ms)
*/

console.time('Time')
let fs = require('fs');
let names = fs.readFileSync('/Users/naveen/Desktop/Naveen/Other/Programming/Project\ Euler/p022_names.txt', 'utf8').split(',');
let totalNameScore = 0;

names = names.map(x => {
    x = x.split('')
    x.shift();
    x.pop();
    return x.join('');
}).sort();

for (let i = 0; i < names.length; i++) {
    let nameScore = 0;
    for (let j = 0; j < names[i].length; j++) {
        nameScore += (names[i].charCodeAt(j) - 64);
    }
    totalNameScore += (nameScore * (i + 1));
}
console.log(totalNameScore);
console.timeEnd('Time')