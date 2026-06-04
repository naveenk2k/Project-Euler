/*
QUESTION:  What is most surprising is that the important mathematical constant,
    e = [2;1, 2, 1, 1, 4, 1, 1, 6, 1, ..., 1, 2 k, 1, ...].

The first ten terms in the sequence of convergents
for e are:
    2, 3, 8 / 3, 11 / 4, 19 / 7, 87 / 32, 106 / 39, 193 / 71, 1264 / 465, 1457 / 536, ...
The sum of digits in the numerator of the 10th convergent is 1 + 4 + 5 + 7 = 17.

Find the sum of digits in the numerator of the 100th convergent of the continued fraction
for e.

ANSWER: 272 (0.1s)
*/

function add(a, b) {
    let sum = [];
    let num1 = a.split('');
    let num2 = b.split('');
    //Making both numbers into strings of the same length by adding zeros at the beginning of the shorter number
    if (num1.length > num2.length) {
        while (num2.length < num1.length) {
            num2.unshift('0');
        }
    } else if (num2.length > num1.length) {
        while (num1.length < num2.length) {
            num1.unshift('0');
        }
    }
    //Converting the array of strings to an array of numbers which we can now add
    num1 = num1.map(Number);
    num2 = num2.map(Number);
    //Implementing the addition process on the strings
    for (let i = num1.length - 1; i >= 0; i--) {
        let s = num1[i] + num2[i]; //s is the sum of manually adding the numbers at each place in both arrays
        //Implementing carry-over:
        if (s >= 10 && num1[i - 1] >= 0) {
            sum.unshift(Number(s.toString().split('')[1]));
            num1[i - 1] += Number(s.toString().split('')[0]);
        } else if (s < 10 || !num1[i - 1]) {
            sum.unshift(s);
        }
    }
    return sum.join('');
}

function multiply(a, b) {
    let product = '0';
    let intermediateSums = []; //These are the intermediate numbers we need to add at the end to get the final product
    //Making num1 the bigger number and num2 the smaller
    let num1 = (a.length > b.length) ? a.split('') : b.split('');
    let num2 = (b.length < a.length) ? b.split('') : a.split('');
    //Converting the array of strings to an array of numbers which we can now multiply
    num1 = num1.map(Number);
    num2 = num2.map(Number);
    let k = 0;
    for (let i = num2.length - 1; i >= 0; i--) {
        let middleProd = [];
        let count = 0;
        let carry = 0;
        for (let j = num1.length - 1; j >= 0; j--) {
            let p = num2[i] * num1[j];
            p += carry;
            if (p >= 10 && num1[j - 1] >= 0) {
                middleProd.unshift(Number(p.toString().split('')[1]));
                carry = Number(p.toString().split('')[0]);
            } else if (p < 10 || !num1[j - 1]) {
                middleProd.unshift(p);
                carry = 0;
            }
        }
        while (count < k) {
            middleProd.push('0');
            count++;
        }
        intermediateSums.push(middleProd.join(''));
        k++;
    }
    for (let s = 0; s < intermediateSums.length; s++) {
        product = add(product, intermediateSums[s]);
    }
    return product;
}

// NOTE: e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ..., 1, 2k, 1]
// repeatedFractions is 2, 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, 1, ..., 1, 2k, 1 (100 terms)
let repeatedFractions = [2];
for (let i = 1; repeatedFractions.length <= 100; i++) {
    repeatedFractions.push('1');
    repeatedFractions.push((2 * i).toString());
    repeatedFractions.push('1');
}

// Currently has 102 terms so slicing it
repeatedFractions = repeatedFractions.slice(0, repeatedFractions.length - 2)

let convergents = [
    ['2', '1'],
    ['3', '1']
];

// NOTE: Formula from https://en.wikipedia.org/wiki/Continued_fraction#Some_useful_theorems
for (let i = 2; i < repeatedFractions.length - 1; i++) {
    convergents[i] = [add(multiply(repeatedFractions[i], convergents[i - 1][0]), convergents[i - 2][0]), add(multiply(repeatedFractions[i], convergents[i - 1][1]), convergents[i - 2][1])];
}

let lastN = convergents[convergents.length - 1][0].split('').map(Number);
let sum = lastN.reduce((acc, curr) => acc + curr, 0)
console.log(sum);