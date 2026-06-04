#include <math.h>
#include <stdio.h>
#include <stdlib.h>

#define ull unsigned long long

ull solve(int n, ull a[]) {
    if (n < 3)
        return (ull) a[n];

    if (!a[n]) {
        a[n] = (ull) (solve(n - 1, a) + solve(n - 2, a) + solve(n - 3, a) + (ull) pow(2, n - 3));
    }
    return (ull) a[n];
}

int main() {
    int n = 60;
    // scanf("%d", &n);
    
	// ull *a = malloc(sizeof(ull) * (n + 1));
    ull a[n+1];
	for (int i = 0; i < n + 1; i++)
		a[i] = 0ULL;

    printf("%llu\n", solve(n, a));

    // free(a);
}
// Correct ans for n = 60: 1144313558794471391