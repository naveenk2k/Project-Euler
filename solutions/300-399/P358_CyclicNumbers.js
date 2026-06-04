//https://en.wikipedia.org/wiki/Cyclic_number

//The number is absolutely huge (probably 10s/100s of extra digits fit in to 00000000137...56789). My code is very limited. Read more about it and try something different.

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

//Multiply
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

    //Un-pad it with 0s at the start to return a string with same length as input
    while (product.length > num1.length && product[0] == '0') {
        product = product.slice(1);
    }
    return product;
}

function getCyclicRotation(n) {
    //n is a string or a number (works for both)
    let first = n.toString().split('').shift();
    return n.toString().slice(1, n.length) + first;
}

function getAllRotations(n) {
    //check if m is a cyclic rotation of n, i.e if the digits of m occur in the same order as the digits in n, but rotated circularly by some number of places
    //generate all cyclic rotations of 'n' and check if 'm' is one of those
    let new_n = n;
    let rotations = [n.toString()];
    for (let i = 2; i < n.toString().length + 1; i++) {
        new_n = getCyclicRotation(new_n);
        rotations.push(new_n)
    }
    return rotations;
}

// function isCyclic(n) {
//generated all cyclic permutations of the number and then checks if all multiples belong to those permutations
//     //n is a string
//     //n * 1 is always going to have the same digits as n, so we can start with 2
//     let rotations = getAllRotations(n);
//     for (let i = 10; i < n.length; i+=10) {
//         if (!rotations.includes(multiply(n.toString(), i.toString()))) return false;

//     }
//     return true;
// }


function isCyclic(n) {
    let j = 1;
    // 00000000137...56789 * some number between (1 - > 16 + extra digits) ending with 0 = 137...5678900000000
    for (let i = 10; i < n.length; i = 10 ** j) {
        if (multiply(n.toString(), i.toString()) == n.slice(8) + '00000000') return true;
        j++;
    }
    return false;
}


// extra digits are more than 7 digits long. Takes 180s to check for 7. So 1800s = 30mins to check for 8.
// Find a way to reduce test cases
let number_of_digits = 3;
for (i = Math.pow(10, number_of_digits - 1); i < Math.pow(10, number_of_digits); i++) {
    if (isCyclic('00000000137' + i + '56789')) {
        console.log('00000000137' + i + '56789');
        break;
    }
}



//0588235294117647
// //0588235294117647

// //length = 16 + extra digits
// 00000000137...56789

// 00000000137...56789 * some number between (1 - > 16 + extra digits) ending with 0 = 137...5678900000000