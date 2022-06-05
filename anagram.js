// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   var str1 = s.split("").sort().join("");
//   var str2 = t.split("").sort().join("");
//   if (str1 !== str2) {
//     return false;
//   } else {
//     return true;
//   }
// };

var isAnagram = function (s, t) {
  if (s === t) {
    return true;
  }
  let str1 = s.length;
  let str2 = t.length;

  if (str1 !== str2) {
    return false;
  }
  var count = {};

  for (let letter of s) {
    count[letter] = (count[letter] || 0) + 1;
  }
  for (let letter of t) {
    if (!count[letter]) return false;
    else --count[letter];
  }

  return true;
};
console.log(isAnagram((s = "anagram"), (t = "nagaram")));
console.log(isAnagram((s = "cat"), (t = "rat")));
