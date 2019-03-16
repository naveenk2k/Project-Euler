//Generates an array with all 4 digit figurate (polygonal) numbers
let polygonal_numbers = [];

for (let i = 45; i <= 140; i++) {
    let t = (i * (i + 1)) / 2;
    polygonal_numbers.push([3, t]);
}

for (let i = 32; i <= 99; i++) {
    let s = i ** 2;
    polygonal_numbers.push([4, s]);
}

for (let i = 26; i <= 81; i++) {
    let p = (i * ((3 * i) - 1)) / 2;
    polygonal_numbers.push([5, p]);
}

for (let i = 23; i <= 70; i++) {
    let h = i * (2 * i - 1);
    polygonal_numbers.push([6, h]);
}

for (let i = 21; i <= 63; i++) {
    let h = i * (5 * i - 3) / 2;
    polygonal_numbers.push([7, h]);
}

for (let i = 19; i <= 58; i++) {
    let o = i * (3 * i - 2);
    polygonal_numbers.push([8, o]);
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
for (const starting of polygonal_numbers) {
    let possible_chain = [starting];
    for (const next of polygonal_numbers) {
        //Checking if the number is of different type, is cyclic and not a duplicate
        if (starting[0] != next[0] && isCyclic(starting[1], next[1]) && !contains(possible_chain, next)) {
            //If length is 5, i.e found first 5 members of the chain already, then we check if it can wrap around
            if (possible_chain.length == 5) {
                if (isCyclic(next[1], possible_chain[0][1])) {
                    //If yes, solution is found and we can return the complete chain
                    return possible_chain;
                }
            } else {
                //Else if the current chain length is not 5
                possible_chain.push(next);
            }
        }
    }
    console.log(possible_chain);
}

// function findNext(last, )