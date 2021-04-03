/*
Question:
https://projecteuler.net/problem=59

Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case characters. Using p059_cipher.txt (right click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.

Answer: 129448 (~0.9s)
*/

/*
Logic:
This question was incredibly painstaking to understand but this is what it asks:

There is a key of length 3 consisting of only lowercase English alphabets such that XOR'ing each value in the encrypted text (36, 22, 80, 0, ...etc) with the ASCII value of each alphabet in the key in a cyclical manner produces a set of ASCII values which when converted to characters, contains a paragraph in English. Find the sum of the ASCII values of each character value in the paragraph. 

Eg. 
Let the key be 'xyz' and we are given the encrypted text as [36, 22, 80, 0, 0, 4, 23, 25, ...etc].
Then, we can form the decrypted text corresponding to this key as [36 ^ ascii(x), 22 ^ ascii(y), 80 ^ ascii(z), 0 ^ ascii(x), 0 ^ ascii(y), 4 ^ ascii(z), 23 ^ ascii(x), 25 ^ ascii(y), ...etc]. 
Finally, converting each of the values in the decrypted text and writing them out as a single string (by joining all values) should produce an English paragraph. 

I have implemented this in a brute-force way since there are only 17576(=26^3) possible keys. For each key, I found the English equivalent of the decrypted text and checked for the presence of common English words like 'the' in that text. 
There was only one key that remained from this filtration - 'exp'. 
*/


console.time('Time');

const Combinatorics = require('./combinatorics');
const fs = require('fs');
const encrypted = fs.readFileSync('p059_cipher.txt', 'utf8').split(',').map(Number);

for (const key of Combinatorics.permutation('abcdefghijklmnopqrstuvwxyz'.split(''), 3).toArray()) {
    const decrypted = encrypted.map((byte, idx) => String.fromCharCode(byte ^ key[idx % 3].charCodeAt()));
    if (decrypted.join('').includes(' the ')) { // Since the decrypted text contains English words, it should be separated by spaces and adding this constraint helped in removing many wrong keys. I could have equivalently tried to filter by guessing more common English words like 'with', 'and', etc. 
        console.log(decrypted.join(''));
        console.log(key);
        console.log(decrypted.reduce((sum, curr) => sum + curr.charCodeAt(), 0));
        break;
    }
}

console.timeEnd('Time');
