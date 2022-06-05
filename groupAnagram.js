// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = {};
  strs.forEach((str) => {
    let letters = str.split("").sort();
    hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
  });
  const keys = Object.keys(hash);
  const values = keys.map(function (v) {
    return hash[v];
  });
  return values;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
