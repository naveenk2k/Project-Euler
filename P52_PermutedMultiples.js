/* QUESTION: It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

Answer: 142857 (0.8s)
*/

for (let num = 100000; num < 150000; num++) {
    let digits = num.toString().split('').sort().toString();
    if ((2 * num).toString().split('').sort().toString() === digits) {
        if ((3 * num).toString().split('').sort().toString() === digits) {
            if ((4 * num).toString().split('').sort().toString() === digits) {
                if ((5 * num).toString().split('').sort().toString() === digits) {
                    if ((6 * num).toString().split('').sort().toString() === digits) {
                        console.log(num);
                    }
                }
            }
        }
    }
}