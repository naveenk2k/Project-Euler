/*
Question: 
NOTE: This problem is a significantly more challenging version of Problem 81.

In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by moving left, right, up, and down, is indicated in bold red and is equal to 2297.
    131, 673, 234, 103, 18
    201, 96, 342, 965, 150
    630, 803, 746, 422, 111
    537, 699, 497, 121, 956
    805, 732, 524, 37, 331

Find the minimal path sum from the top left to the bottom right by moving left, right, up, and down in matrix.txt (right click and "Save Link/Target As..."), a 31K text file containing an 80 by 80 matrix.
*/
// Answer: 425185 (~0.1s)

/*
Logic:
Dijkstra's Algorithm
*/

// Run using: cppsafe P83_PathSum\(FourWays\) && time ./P83_PathSum\(FourWays\) < p083_matrix.txt

#include <algorithm>
#include <cmath>
#include <iostream>
#include <map>
#include <numeric>
#include <queue>
#include <set>
#include <unordered_map>
#include <vector>

using namespace std;

typedef long long ll;
typedef unsigned long long ull;
typedef vector<long long> vl;
typedef vector<vector<long long>> vvl;
typedef vector<pair<long long, long long>> vpl;
typedef pair<long long, long long> pl;

#define PB push_back
#define REP(i, a, b) for (ll i = a; i <= (ll)b; i++)
#define REPR(i, a, b) for (ll i = a; i >= (ll)b; i--)
#define show(arr)                            \
    cerr << #arr << " is:"                   \
         << "\n[ ";                          \
    for (auto& ax : arr) cout << ax << ", "; \
    cout << "]\n\n";
#define disp(x) cerr << #x << " is " << x << "\n";
#define bm(x) cout << "!Here" << x << "!" \
                   << "\n";
#define en "\n"
#define INF 1e15 + 5

void solve();

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int testCases = 1;
    // cin >> testCases;
    while (testCases--) solve();

    return 0;
}

const ll n = 80;

void solve() {
    // vvl grid= {
    //     {131, 673, 234, 103, 18},
    //     {201, 96, 342, 965, 150},
    //     {630, 803, 746, 422, 111},
    //     {537, 699, 497, 121, 956},
    //     {805, 732, 524, 37, 331}};

    vvl grid(n, vl(n));
    for (vl& row : grid)
        for (ll& x : row) cin >> x;

    // Pad 0s above the first row and the left of the first column
    grid.insert(grid.begin(), vl(n + 1, 0));
    REP(i, 1, n)
    grid[i].insert(grid[i].begin(), 0);

    map<pl, vector<pair<pl, ll>>> adj;
    // Add an edge from (0, 0) to the top-left vertex in the grid (which became the vertex (1, 1) after padding). Its weight is equal to the value in the old top-left vertex because it costs that much to get there.
    // Eg. To get to cell (0, 0) in the sample input, it costs 131.
    adj[{0, 0}].PB({{1, 1}, grid[0][0]});

    // Create the rest of the adjacency list as follows:
    // Add an edge from A to B with weight 'B' where B can be U, D, L, R of A.
    REP(i, 1, n) {
        REP(j, 1, n) {
            if (i - 1 > 0) adj[{i, j}].PB({{i - 1, j}, grid[i - 1][j]});
            if (i + 1 < (n + 1)) adj[{i, j}].PB({{i + 1, j}, grid[i + 1][j]});
            if (j - 1 > 0) adj[{i, j}].PB({{i, j - 1}, grid[i][j - 1]});
            if (j + 1 < (n + 1)) adj[{i, j}].PB({{i, j + 1}, grid[i][j + 1]});
        }
    }

    priority_queue<pair<ll, pl>> q;
    vl distance((n + 1) * (n + 1), INF);
    // Set the distance to the first node to be the value at that node (because it costs us some value to start at the top-left).
    distance[0 * (n + 1) + 0] = grid[1][1];

    vector<bool> processed((n + 1) * (n + 1), false);

    q.push({distance[0], {0, 0}});
    while (!q.empty()) {
        auto [d, a] = q.top();
        q.pop();
        auto [ax, ay] = a;
        if (processed[ax * (n + 1) + ay]) continue;
        processed[ax * (n + 1) + ay] = true;

        for (auto [b, w] : adj[{ax, ay}]) {
            auto [bx, by] = b;
            if (distance[ax * (n + 1) + ay] + w < distance[bx * (n + 1) + by]) {
                distance[bx * (n + 1) + by] = distance[ax * (n + 1) + ay] + w;
                q.push({-(distance[bx * (n + 1) + by]), {bx, by}});
            }
        }
    }

    cout << distance[distance.size() - 1] << en;
}
