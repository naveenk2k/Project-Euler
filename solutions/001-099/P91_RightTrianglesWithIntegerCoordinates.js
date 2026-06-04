// | | |
// | | |

// (0, 0)
// (1, 0)
// (2, 0)
// (0, 1)
// (0, 2)
// (1, 1)
// (1, 2)
// (2, 1)
// (2, 2)

// No of triangles that can be formed with 'n' sides = No of triangles with (n - 1) sides + some number (P&C)

//For the next layer, we can get only 3 triangles by choosing points ONLY in the new layer (From PE diagram - 8, 9, 14). The remaining triangles have to have only one of the their two points as an existing point from the previous layer


//Brute force logic doesn't work. Too many points to check.
//Find better way using above DP formula or using P&C

/*Answers:
2x2 = 14
10x10 = 430
20x20 = 1854
30x30 = 4366 triangles(50s)
*/

let size = 10;
let points = [];
let origin = [0, 0];
for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
        points.push([i, j]);
    }
}

function distSq([a1, b1], [a2, b2]) {
    return (a2 - a1) ** 2 + (b2 - b1) ** 2;
}

function found(arr, p) {
    for (let point of arr) {
        if (p[0] == point[0] && p[1] == point[1] && p[2] == point[2]) {
            return true;
        }
    }
    return false;
}

let distances = [];
let count = 0;
for (let p1 of points) {
    for (let p2 of points) {
        if (p1 != p2) {
            let d1 = distSq(p1, p2)
            let d2 = distSq(origin, p1);
            let d3 = distSq(origin, p2);
            if (d1 != 0 && d2 != 0 && d3 != 0 && !found(distances, [d1, d2, d3])) {
                if (d1 + d2 == d3 || d1 + d3 == d2 || d2 + d3 == d1) {
                    distances.push([d1, d2, d3]);
                    count++;
                }
            }
        }
    }
}
console.log(count);