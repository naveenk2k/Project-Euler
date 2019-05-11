//Generates an array with all 4 digit figurate (polygonal) numbers where index 0 contains triangle numbers, index 1 contains square numbers and so on.

let polygonal_numbers = [[], [], [], [], [], []];

for (let i = 45; i <= 140; i++) {
    let t = (i * (i + 1)) / 2;
    polygonal_numbers[0].push(t);
}

for (let i = 32; i <= 99; i++) {
    let s = i ** 2;
    polygonal_numbers[1].push(s);
}

for (let i = 26; i <= 81; i++) {
    let p = (i * ((3 * i) - 1)) / 2;
    polygonal_numbers[2].push(p);
}

for (let i = 23; i <= 70; i++) {
    let h = i * (2 * i - 1);
    polygonal_numbers[3].push(h);
}

for (let i = 21; i <= 63; i++) {
    let h = i * (5 * i - 3) / 2;
    polygonal_numbers[4].push(h);
}

for (let i = 19; i <= 58; i++) {
    let o = i * (3 * i - 2);
    polygonal_numbers[5].push(o);
}

function isCyclic(n1, n2) {
    return n1.toString()[2] == n2.toString()[0] && n1.toString()[3] == n2.toString()[1];
}

function contains(arr, n) {
    for (const nums of arr) {
        if (nums[1] == n) return true;
    }
    return false;
}


//https://www.mathblog.dk/project-euler-61-numbers-cyclic-property/
//Need to find a way to make it a recursive function
//Right now, the output contains arrays for each number with other numbers that could come to the right of it.
//The website above tries to find the left most element and then tries to generate the next right element and so on till 6 numbers are found in a chain. Need to implement the checking based on the last added number still

console.log(polygonal_numbers);
// function findNext(last, )