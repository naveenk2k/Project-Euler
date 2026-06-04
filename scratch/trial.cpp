
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    vector<int> nums;
   //  nums.push_back(-242);
   //  nums.push_back(-1);
    nums.push_back(1);
    nums.push_back(5);
    nums.push_back(8);
    nums.push_back(8);
    nums.push_back(11);
    cout << "Before nums is: ";
    for (unsigned int i = 0; i < nums.size(); i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    vector<int>::iterator result;
    int new_val = 1;
    result = lower_bound(nums.begin(), nums.end(), new_val);
    cout << result-nums.begin() << '\n';
    nums.insert(result, new_val);
    cout << "After, nums is: ";
    for (unsigned int i = 0; i < nums.size(); i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
}
