// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashMap = {};
  let result = [];

  //     frequency counter map
  for (let num of nums) {
    if (hashMap[num]) {
      hashMap[num]++;
    } else {
      hashMap[num] = 1;
    }
  }
  //     sort by the most frequent once
  let arr = Object.entries(hashMap);
  arr.sort((a, b) => {
    return b[1] - a[1]; // a[1] or b[1] is the frequency value
  });
  // get the k most frequent ones , and push it to the final result
  arr.slice(0, k).forEach((element) => result.push(+element[0]));
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
