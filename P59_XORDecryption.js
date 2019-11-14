let fs = require('fs');

let encrypted = fs.readFileSync('p059_cipher.txt', 'utf8').split(',').map(Number);

const isValidEnglishCharacter = n => {
    return ((n >= 32 && n <= 90) || (n >= 97 && n <= 122));
};

const getXOROutput = (key, encryptedChars) => {
    let xor = [];
    for (let i = 0; i < 3; i++) {
        xor.push(key[i] ^ encryptedChars[i]);
    }
    return xor;
};

const firstCharacters = encrypted.filter((char, index) => index % 3 == 0);
const secondCharacters = encrypted.filter((char, index) => index % 3 == 1);
const thirdCharacters = encrypted.filter((char, index) => index % 3 == 2);

for (let i = 97; i <= 122; i++) {
    let flag = true;
    for (let j = 0; j < firstCharacters.length; j++) {
        if (!isValidEnglishCharacter(i ^ firstCharacters[j])) {
            flag = false;
            break;
        }
    }
    if (flag)
        console.log(String.fromCharCode(i));
}

for (let i = 97; i <= 122; i++) {
    let flag = true;
    for (let j = 0; j < secondCharacters.length; j++) {
        if (!isValidEnglishCharacter(i ^ secondCharacters[j])) {
            flag = false;
            break;
        }
    }
    if (flag)
        console.log(String.fromCharCode(i));
}

// for (let i = 97; i <= 122; i++) {
//     let flag = true;
//     for (let j = 0; j < thirdCharacters.length; j++) {
//         if (!isValidEnglishCharacter(i ^ thirdCharacters[j])) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag)
//         console.log(String.fromCharCode(i));
// }