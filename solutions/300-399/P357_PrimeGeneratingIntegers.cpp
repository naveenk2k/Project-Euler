/*
Question: 
https://projecteuler.net/problem=357

Consider the divisors of 30: 1,2,3,5,6,10,15,30.
It can be seen that for every divisor d of 30, d+30/d is prime.

Find the sum of all positive integers n not exceeding 100 000 000
such that for every divisor d of n, d+n/d is prime.

Answer: 1739023853137 (24s)
*/

/*
Logic:
1. All such numbers 'x' have to be one less than a prime because 1 is a divisor every number and hence 1+(x/1) = x+1 must be prime for 'x' to satisfy the condition.

2. Only consider half of the divisors of 'x' because if d1*d2=x, then d1+(x/d1) = d2+(x/d2) = d1+d2.
Aliter:
Find only the divisors (in sorted order) and then sum them from the first and last position, moving in and check if this sum is prime. 
*/

#include <chrono>
#include <cmath>
#include <iostream>
#include <set>
#include <vector>

using ll = long long;

using namespace std;

void solve();

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    auto start = chrono::steady_clock::now();
    solve();
    auto end = chrono::steady_clock::now();

    auto diff = end - start;
    cout << "Time Taken: " << chrono::duration<double, milli>(diff).count() << " ms" << '\n';
}

constexpr ll MAX = 1e8;
set<ll> primes;
ll answer = 0LL;

// Find all primes upto 'n' using the Sieve of Eratosthenes and add them to the set 'primes'.
void sieve(ll n) {
    vector<char> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false;
    for (ll i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (ll j = i * i; j <= n; j += i)
                isPrime[j] = false;
        }
    }

    for (ll i = 0; i <= n; ++i)
        if (isPrime[i]) primes.insert(i);
}

void satisfies(ll x) {
    // Find all factors and check if 'x' satisfies the condition.
    ll d1, d2;
    for (ll i = 1; i <= sqrt(x); i++) {
        if (x % i == 0) {
            if (x / i == i) d1 = d2 = i;
            else d1 = i, d2 = x / i;

            if (!primes.contains(d1 + d2)) return;
        }
    }

    answer += x;
}

void solve() {
    sieve(MAX);

    for (ll x : primes) satisfies(x - 1);

    cout << answer << '\n';
}
