/*
Question:
https://projecteuler.net/problem=89

For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a particular number.

For example, it would appear that there are at least six ways of writing the number sixteen:

IIIIIIIIIIIIIIII
VIIIIIIIIIII
VVIIIIII
XIIIIII
VVVI
XVI

However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.

The 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this problem.

Find the number of characters saved by writing each of these in their minimal form.

Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.

Answer: 743 (~30ms)
*/

/*
Logic:
Convert Un-optimized Roman to Decimal.
Convert Decimal to Optimized Roman.
*/

console.time('Time');

const fs = require('fs');
const numerals = fs.readFileSync('p089_roman.txt', 'utf8').split('\n').map(String);

/*
Convert a Roman character (I, V, X, L, M, etc) or pair of characters (IX, XC, etc) to its decimal equivalent. This simply acts as a look-up table for Roman->Integer conversion.
Eg. V->5, IX->9, etc.
*/
const value = roman => {
    if (roman.length == 1) {
        switch (roman) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
        }
    } else if (roman.length == 2) {
        return value(roman[1]) - value(roman[0]);
    }
}

/*
Convert a Roman numeral to its decimal equivalent by splitting it up into its constituent Roman characters. 
Eg. XCII->92, VIII->8, etc.
*/
const romanToInteger = roman => {
    let integer = 0;
    for (let i = 0; i < roman.length; ++i) {
        if (i < roman.length - 1 && value(roman[i]) < value(roman[i + 1])) // for things like 'IV', 'XC', etc.
            integer += value(roman.slice(i, i + 2)), ++i;
        else
            integer += value(roman[i]);
    }
    return integer;
}

/*
Convert a 'decimal * power of 10' (3, 30, 80, 600, 3000, etc) to its Roman equivalent. This simply acts as a look-up table for DecimalPowerOf10->Roman conversion.
Eg. 4->IV, 90->XC, 700->DCC, etc.
*/
const roman = value => {
    switch (value) {
        case 0: return '';
        case 1: return 'I';
        case 4: return 'IV';
        case 5: return 'V';
        case 9: return 'IX';
        case 10: return 'X';
        case 40: return 'XL';
        case 50: return 'L';
        case 90: return 'XC';
        case 100: return 'C';
        case 400: return 'CD';
        case 500: return 'D';
        case 900: return 'CM';
        case 1000: return 'M';
        default: {
            // Here, 'value' can only be 2, 3, 6, 7, 8, 20, 30, 60, 70, 80, 200, 300, 600, 700, 800, 2000, 3000, 4000, etc.
            // We can form the Roman equivalent of 'value' recursively. 
            let romanString = '';
            if (value === 2 || value === 3)
                romanString = 'I' + roman(value - 1);
            else if (value === 6 || value === 7 || value === 8)
                romanString = 'V' + roman(value - 5);
            else if (value === 20 || value === 30)
                romanString = 'X' + roman(value - 10);
            else if (value === 60 || value === 70 || value === 80)
                romanString = 'L' + roman(value - 50);
            else if (value === 200 || value === 300)
                romanString = 'C' + roman(value - 100);
            else if (value === 600 || value === 700 || value === 800)
                romanString = 'D' + roman(value - 500);
            else // value is multiple of 1000.
                romanString = 'M' + roman(value - 1000);

            return romanString;
        }
    }
}

/*
Convert an integer to its Roman numeral equivalent by splitting it up into its constituent powers of 10. 
Eg. 92->90+2->XC+II->XC++, 456->400+50+6->CD+L+VI->CDLVI, etc.

NOTE:
Only one I, X, and C can be used as the leading numeral in part of a subtractive pair.
* I can only be placed before V and X. => IV=4, IX=9
* X can only be placed before L and C. => XL=40, XC=90
* C can only be placed before D and M. => CD=400, CM=900
*/
const integerToRoman = integer => {
    let romanString = '';
    integer = String(integer);
    let currValue;
    for (let i = integer.length - 1; i >= 0; --i) {
        currValue = integer[i] * Math.pow(10, integer.length - i - 1);
        romanString = roman(currValue) + romanString;
    }
    return romanString;
}

let ans = 0;
for (const numeral of numerals) {
    const integer = romanToInteger(numeral);
    // console.log(integer);

    const string = integerToRoman(integer);
    // console.log(string);

    ans += (numeral.length - string.length);
}

console.log(ans);

console.timeEnd('Time');