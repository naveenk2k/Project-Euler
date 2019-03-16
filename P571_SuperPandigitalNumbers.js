/* QUESTION: A positive number is pandigital in base b if it contains all digits from 0 to b - 1 at least once when written in base b.

A n-super-pandigital number is a number that is simultaneously pandigital in all bases from 2 to n inclusively.
For example 978 = 1111010010(2) = 1100020(3) = 33102(4) = 12403(5) is the smallest 5-super-pandigital number.
Similarly, 1093265784 is the smallest 10-super-pandigital number.
The sum of the 10 smallest 10-super-pandigital numbers is 20319792309.

What is the sum of the 10 smallest 12-super-pandigital numbers?

ANSWER: 30510390701978 (~8 minutes)

Required numbers in base 12: ['217904b5a638', '2307185a64b9', '36752b80419a', '394017b8526a', '395b41267a80', '4586ab932710', '5248390a716b', '5318a47962b0', '5348a9b10762', '53b762481a90'] (Takes 125s to get first number)
*/

//NOTE: Works for numbers upto base 10, i.e The sum of the 10 smallest 10-super-pandigital numbers can be found(20319792309) in ~1.85s.

//LOGIC: Form pandigital numbers in base 12 and check if their equivalents in other bases are pandigitals too.

function isPandigitalInBaseb(n, b) {
    let digits = new Set();
    let found = new Set(n.toString().split(''));
    if (found.size < b) return false; //number needs atleast 'b' digits to be pandigital in base 'b'

    for (let i = 0; i < b && i < 10; i++) {
        digits.add(i.toString());
    }
    if (b >= 11) {
        digits.add('a');
    }
    if (b == 12) {
        digits.add('b');
    }
    if (found.size != digits.size) return false;

    //Checking sets equality
    return digits.size === found.size && [...digits].every(value => found.has(value));
}

function isnSuperPandigitalNumber(x, n) {
    x = parseInt(x, inputBase); //converting to base 10
    for (let base = n - 1; base >= 2; base--) { //n - 1 cause it's already pandigital in base 12
        // console.log(x.toString(11));
        if (!isPandigitalInBaseb(x.toString(base), base)) {
            return false;
        }
    }
    return true;
}

function nextPermutation(array) {
    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return false;

    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array;
}

let a = ['1', '0']; //for minimum, original number needs to start from 10234....

//Change only these two as necessary
let terms = 1; //required number of terms
let inputBase = 12;

let sum = 0;
let count = 0;

for (let i = 2; i < inputBase; i++) {
    if (i < 10) a.push(i.toString());
    else {
        a.push(String.fromCharCode(65 + (i - 10)));
    }
}

while (count < terms) {
    if (isnSuperPandigitalNumber(a.join(''), inputBase)) {
        console.log('Num = ', parseInt(a.join(''), inputBase), ',', a.join(''));
        count++;
        sum += parseInt(a.join(''), inputBase);
    }
    a = nextPermutation(a);
}

console.log('Sum = ', sum);
