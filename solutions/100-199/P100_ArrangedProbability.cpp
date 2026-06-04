/*
Question: 
https://projecteuler.net/problem=100

If a box contains twenty-one coloured discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs, P(BB) = (15/21)×(14/20) = 1/2.

The next such arrangement, for which there is exactly 50% chance of taking two blue discs at random, is a box containing eighty-five blue discs and thirty-five red discs.

By finding the first arrangement to contain over 10^12 = 1,000,000,000,000 discs in total, determine the number of blue discs that the box would contain.

Answer: 756872327473 (0.05ms)
*/

/*
Logic:
We need to find 'b' such that
(b*(b-1))/(n*(n-1)) = 1/2 where n=b+r. 

Rearrage to get 2b^2-2b-n^2+n = 0.
This is a diophantine equation which can be solved using this online tool:
https://www.alpertron.com.ar/QUAD.HTM

It also provides a recursive method of finding more solutions:
x_n+1 = 3*x_n + 2*y_n - 2
y_n+1 = 4 *x_n + 3 *y_n - 3

(Here, x=b=#_of_blue_disks and y=b+r=total_#_of_disks)

Given the initial solution in the question, I just looped until I found a solution with 'y > 1e12'.
*/

#include <chrono>
#include <cmath>
#include <iomanip>
#include <iostream>

using namespace std;

typedef unsigned long long ull;

void solve();

int main() {
    auto start = chrono::steady_clock::now();
    solve();
    auto end = chrono::steady_clock::now();

    auto diff = end - start;
    cout << "Time Taken: " << chrono::duration<double, milli>(diff).count() << " ms" << '\n';
}

void solve() {
    ull b = 15;
    ull n = 21;  // n=b+r.
    ull bTemp, nTemp;
    constexpr ull limit = 1e12;

    while (n < limit) {
        bTemp = 3 * b + 2 * n - 2;
        nTemp = 4 * b + 3 * n - 3;
        b = bTemp;
        n = nTemp;
    }

    cout << b << '\n';
}
