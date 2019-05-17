//Both solutions are almost the same. Second function works in other bases as well

//Uses arrays
function isPandigital(n) {
    let a = new Array(9);
    a.fill(false, 0, 9);
    n = n.toString().split('').map(Number);
    for (let x of n) {
        a[x - 1] = true;
    }
    for (let bool of a) {
        if (bool == false) return false;
    }
    return true;
}

//Uses sets
function isPandigitalInBaseb(n, b = 10) {
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

module.exports = {
    isPandigital,
    isPandigitalInBaseb
};