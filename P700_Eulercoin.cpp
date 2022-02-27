/*
Question: 

*/

/*
Logic:
There are mistakes in C++ code due to integer overflow. 
Bruteforce takes too long. Need to find inverse of the MOD. 

See:
https://urmaul.com/blog/solution-for-project-euler-problem-700/
*/

// TODO:

#include <iostream>
#include <set>
#include <vector>

typedef unsigned long long ll;

using namespace std;

void solve();

int main() {
    solve();
}

void solve() {
    ll x = 1504170715041707LL;
    constexpr ll MOD =  4503599627370517LL;

    ll min = x;
    ll sum = x;
    ll next;
    cout << x << ' ' << sum << " 1" << '\n';
    ll n = 1e5;
    for (ll i = 2; i <= n; ++i) {
        next = ((x % MOD) * (i % MOD)) % MOD;
        if (next < min) {
            min = next;
            sum += next;
            cout << next << ' ' << sum << ' ' << i << '\n';
        } else {
            // cout << "No\n";
        }
    }
}

// 422691927098 1517440153755132 11117
// 267350072099 1517707503827231 17686
