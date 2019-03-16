let fs = require('fs');

let encrypted = fs.readFileSync('p059_cipher.txt', 'utf8').split(',').map(Number);


//Dont know logic

for (let key1 = 97; key1 < 123; key1++) {
    for (let key2 = 97; key2 < 123; key2++) {
        for (let key3 = 97; key3 < 123; key3++) {
            if(checkKeys(key1, key2, key3)) console.log(key1, key2, key3);
        }
    }
}


function isValid(n) {
    return ((n >= 65 && n <= 90) || (n >= 97 && n <= 122)) ? true : false;
}

function checkKeys(key1, key2, key3) {
    for (let i = 0; i < encrypted.length; i += 3) {
        if (!isValid(encrypted[i] ^ key1) || !isValid(encrypted[i + 1] ^ key2) || !isValid(encrypted[i + 2] ^ key3)) {
            return false;
        }
    }
    return true;
}