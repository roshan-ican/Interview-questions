// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  // Go for it
  //   reverse the string each word
  const allwords = str.split(" ");
  //   retain all the spaces and return
  return allwords.map((item) => item.split("").reverse().join("")).join(" ");
}

console.log(reverseWords("apple"));
