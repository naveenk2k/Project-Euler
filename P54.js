const fs = require('fs');

let hands = fs
    .readFileSync('p054_poker.txt', 'utf8')
    .split('\n');



//8C TS KC 9H 4S 7D 2S 5D 3S AC
// 5C AD 5D AC 9C 7C 5H 8D TD KS
// 3H 7H 6S KC JS QH TD JC 2D 8S

let hand = '8C TS KC 9H 4S 7D 2S 5D 3S AC';

hand = hand.split(/(\d|\w\w \d|\w\w \d|\w\w \d|\w\w \d|\w\w ) /);
console.log(hand);