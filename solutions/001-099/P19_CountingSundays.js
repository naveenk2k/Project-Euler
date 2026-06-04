/* QUESTION: You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

Answer: 171 (~3s)
*/

console.time('Time')

//Logic to find the date given a particular date 
let monthKey = {
    1: 1,
    2: 4,
    3: 4,
    4: 0,
    5: 2,
    6: 5,
    7: 0,
    8: 3,
    9: 6,
    10: 1,
    11: 4,
    12: 6
};

let centuryKey = {
    1700: 4,
    1800: 2,
    1900: 0,
    2000: 6
};

//Function to return the day as a number between 0 and 6 given the date
function getDay(day, month, year) {
    let val = year % 100;
    val = Math.floor(val / 4);
    val += day;
    val += getMonthKey(month);
    if ((month === 1 || month === 2) && isLeapYear(year)) {
        val--;
    }
    val += getCenturyKey(year);
    val += (year % 100);
    val %= 7;
    return val;
}

function getMonthKey(month) {
    return monthKey[month];
}

function getCenturyKey(year) {
    year -= (year % 100);
    while (year > 2000 || year < 1700) {
        year -= 400;
    }
    return centuryKey[year];
}

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 != 0) return true;
    else if (year % 4 === 0 && year % 400 === 0) return true;
    else return false;
}

//Actually checking for the answer

let countOfSundays = 0;
for (let y = 1901; y <= 2000; y++) { //0 = Sat, 1 = Sun, 2 = Mon, etc
    for (let m = 1; m <= 12; m++) {
        if (getDay(1, m, y) === 1) countOfSundays++;
    }
}

console.log(countOfSundays);
console.timeEnd('Time')