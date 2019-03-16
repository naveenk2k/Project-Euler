/* QUESTION: The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

Answer: 9110846700 (Takes time)
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

    //To see it neatly
    //console.log(a + ' + ' + b + ' = ' + Number(sum.join('')));

    //Returns a string
    return sum.join('');
}


//Multiply
function multiply(a, b) {
    let product = '0';
    let intermediateSums = []; //stuff we need to add at the end to get final product
    //num1 is the bigger number, num2 is the smaller
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

let sum = '0';

for (let i = 500; i < 600; i++) {
    let term = i.toString();
    let count = 0;
    while (count < i - 1) {
        term = multiply(term, i.toString());
        count++;
    }
    sum = add(sum, term);
}

console.log(sum.slice(-10));


//6339403340
//8689143420
//8376425420
//8283607420
//6320689420