//Generates arrays with all 4 figurate (polygonal) numbers
let triangle_numbers = [];
for (let i = 46; i <= 140; i++) {
    let t = (i * (i + 1)) / 2;
    triangle_numbers.push(t);
}

let square_numbers = [];
for (let i = 32; i <= 99; i++) {
    let s = i ** 2;
    square_numbers.push(s);
}

let pentagonal_numbers = [];
for (let i = 26; i <= 81; i++) {
    let p = (i * ((3 * i) - 1)) / 2;
    pentagonal_numbers.push(p);
}

let hexagonal_numbers = [];
for (let i = 23; i <= 70; i++) {
    let h = i * (2 * i - 1);
    hexagonal_numbers.push(h);
}

let heptagonal_numbers = [];
for (let i = 21; i <= 63; i++) {
    let h = i * (5 * i - 1) / 2;
    heptagonal_numbers.push(h);
}

let octagonal_numbers = [];
for (let i = 19; i <= 58; i++) {
    let o = i * (3 * i - 2);
    octagonal_numbers.push(o);
}

//Functions that return an array of all possible numbers from the array 'arr' that could go to the left or right of number 'n' according to our cyclic rules
function getRightCyclicMatches(n, arr) {
    let valid = arr.filter(num => {
        return n.toString()[2] == num.toString()[0] && n.toString()[3] == num.toString()[1]
    });
    if (valid.length > 0) {
        return valid;
    } else {
        return [];
    }
}

function getLeftCyclicMatches(n, arr) {
    let valid = arr.filter(num => {
        return n.toString()[0] == num.toString()[2] && n.toString()[1] == num.toString()[3]
    });
    if (valid.length > 0) {
        return valid;
    } else {
        return [];
    }
}

// function getPossibleCandidates(n,)
let possible_octagonal_candidates = {};
for (let num of octagonal_numbers) {
    possible_octagonal_candidates[num] = {
        left: [],
        right: []
    };
    possible_octagonal_candidates[num].left.push(getLeftCyclicMatches(num, triangle_numbers));
    possible_octagonal_candidates[num].left.push(getLeftCyclicMatches(num, square_numbers));
    possible_octagonal_candidates[num].left.push(getLeftCyclicMatches(num, pentagonal_numbers));
    possible_octagonal_candidates[num].left.push(getLeftCyclicMatches(num, hexagonal_numbers));
    possible_octagonal_candidates[num].left.push(getLeftCyclicMatches(num, heptagonal_numbers));

    possible_octagonal_candidates[num].right.push(getRightCyclicMatches(num, triangle_numbers));
    possible_octagonal_candidates[num].right.push(getRightCyclicMatches(num, square_numbers));
    possible_octagonal_candidates[num].right.push(getRightCyclicMatches(num, pentagonal_numbers));
    possible_octagonal_candidates[num].right.push(getRightCyclicMatches(num, hexagonal_numbers));
    possible_octagonal_candidates[num].right.push(getRightCyclicMatches(num, heptagonal_numbers));

}


//To remove numbers which don't have any other numbers that can be on either side of them (only a few numbers were removed here sadly)
for (let candidate in possible_octagonal_candidates) {
    if (possible_octagonal_candidates[candidate]['left'].every(a => a.length == 0) && possible_octagonal_candidates[candidate]['right'].every(a => a.length == 0)) {
        delete possible_octagonal_candidates[candidate];
    }
}

/*
This is how the possible_octagonal_candidates object looks right now:
possible_octagonal_candidates[num].left = [
    [possible triangular numbers],  //empty if no possible numbers
    [possible square numbers],
    [possible pentagonal numbers],
    [possible hexagonal numbers],
    [possible heptagonal numbers]
]
possible_octagonal_candidates[num].right = [
    [possible triangular numbers],
    [possible square numbers],
    [possible pentagonal numbers],
    [possible hexagonal numbers],
    [possible heptagonal numbers]
]
*/

console.log(Object.keys(possible_octagonal_candidates).length);