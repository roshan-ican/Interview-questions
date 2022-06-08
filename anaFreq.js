// ANAGRAMS
// Given two strings, write a function to determine if the
// second string is an anagram of the first.An anagram is
// aword, phrase,or name formed by rearranging the
// letters of another,such as cinema,formed from iceman.

function validAnagram(first, last) {
  // if length are not equal then it's not a anagram
  if (first.length !== last.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, incremet, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // the Second loop
  for (let i = 0; i < last.length; i++) {
    let letter = last[i];
    // can't find letter or letter is zero then it's anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
  // for (let char of str) {
  // }
}
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("souha", "rosan"));
