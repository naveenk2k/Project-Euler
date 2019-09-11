
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int getMostWork(vector<int> folders, int workers)
{
   int n = folders.size();
   int lo = *max_element(folders.begin(), folders.end());
   int hi = accumulate(folders.begin(), folders.end(), 0);

   while (lo < hi)
   {
      cout << lo << " " << hi << endl;
      int x = lo + (hi - lo) / 2;

      int required = 1, current_load = 0;
      for (int i = 0; i < n; ++i)
      {
         if (current_load + folders[i] <= x)
         {
            // the current worker can handle it
            current_load += folders[i];
         }
         else
         {
            // assign next worker
            ++required;
            current_load = folders[i];
         }
      }
      if (required <= workers)
         hi = x;
      else
         lo = x + 1;
   }
   return lo;
}


int main() {
   std::vector<int> v = {10, 20, 30, 40, 50, 60, 70, 80, 90};

   cout << getMostWork(v, 3);
   return 0;
}
