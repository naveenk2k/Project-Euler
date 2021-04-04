/*
Question:
https://projecteuler.net/problem=205

Peter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.
Colin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.

Peter and Colin roll their dice and compare totals: the highest total wins. The result is a draw if the totals are equal.

What is the probability that Pyramidal Pete beats Cubic Colin? Give your answer rounded to seven decimal places in the form 0.abcdefg

Answer: 0.5731441 (~0.3s)
*/

/*
Logic:
Simulate the possible throws.
[See comments below for better explanation.]
*/

#include <algorithm>
#include <chrono>
#include <iomanip>
#include <iostream>
#include <numeric>
#include <vector>

typedef long long ll;

using namespace std;

void solve();

int main() {
    auto start = chrono::steady_clock::now();
    solve();
    auto end = chrono::steady_clock::now();

    auto diff = end - start;
    cout << "Time Taken: " << chrono::duration<double, milli>(diff).count() << " ms" << '\n';
}

void solve() {
    // Generate all of Peter's possible throws and store their corresponding sums. Eg. (1,1,1,1,1,1,1,1,1)->9, ..., (4,4,4,4,4,4,4,4,4)->36.
    int N = 4;
    vector<int> peterSums;
    for (int i = 1; i <= N; ++i)
        for (int j = 1; j <= N; ++j)
            for (int k = 1; k <= N; ++k)
                for (int l = 1; l <= N; ++l)
                    for (int m = 1; m <= N; ++m)
                        for (int n = 1; n <= N; ++n)
                            for (int o = 1; o <= N; ++o)
                                for (int p = 1; p <= N; ++p)
                                    for (int q = 1; q <= N; ++q)
                                        peterSums.push_back(i + j + k + l + m + n + o + p + q);

    sort(peterSums.begin(), peterSums.end());

    // Generate all of Colin's possible throws and store their corresponding sums. Eg. (1,1,1,1,1,1)->6, ..., (6,6,6,6,6,6)->36.
    int M = 6;
    vector<int> colinSums;
    for (int i = 1; i <= M; ++i)
        for (int j = 1; j <= M; ++j)
            for (int k = 1; k <= M; ++k)
                for (int l = 1; l <= M; ++l)
                    for (int m = 1; m <= M; ++m)
                        for (int n = 1; n <= M; ++n)
                            colinSums.push_back(i + j + k + l + m + n);

    sort(colinSums.begin(), colinSums.end());

    // For each of Peter's sums, find how many of Colin's sums he beats. Since the possible sums are sorted, this can be done in O(logn).
    vector<int> peterWins;
    for (int p : peterSums) {
        int cnt = lower_bound(colinSums.begin(), colinSums.end(), p) - colinSums.begin();
        peterWins.push_back(cnt);
    }

    /*

    Now 'peterWins[i]' contains the number of 'colinSums', i.e. the number of Colin's possible throws, that 'peterSums[i]' beats. 
    So for Peter to beat Colin with a sum equal to 'peterSums[i]', Peter must throw his dice in such a way as to get this sum (the probability of which is 1/262144) AND Colin must throw his dice is any one of the ways that produces a sum less than what Peter throws. 
    We know that there are 'peterWins[i]' such possible sums for Colin to throw that result in Peter winning. The probability of Colin throwing a particular permutation of one of these losing sums is (1/46656). Thus, the probability of Colin throwing any losing permutation is peterWins[i] * (1/46656).
    So, the probability of Peter winning when he has thrown a sum equal to 'peterSums[i]' is (1/262144) * peterWins[i] * (1/46656).

    To find the probability of Peter winning for all possible throws, we sum of over all of his possible sums and add them up.
    Hence, the required answer is (1/262144) * (1/46656) * SUM(peterWins).
    
    */

    ll totalWins = accumulate(peterWins.begin(), peterWins.end(), 0LL);

    cout << setprecision(7) << (long double)totalWins / (peterSums.size() * colinSums.size()) << '\n';
}