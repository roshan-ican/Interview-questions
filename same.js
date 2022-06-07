// Write a function called same, which accepts two arrays.
//  The function should return true if every value in the
// array has it's corresponding value squared in the second
//   array.The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 91]); // true
// same([1, 2, 1], [1, 9]); // false
// same([1, 2, 3], [4, 4, 1]); // false(must be same frequency)

function same(arr1, arr2) {
  // if 2 arrary's length are not equal then there's no way for the solution to work
  if (arr1.length !== arr2.length) {
    return false;
  }
  // defined the counter1
  // defined the counter2
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // guess storing the arr1 in that object
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // guess storing the arr1 in that object

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // checking if the the numbers present in the arr2 is the square of numbers in the arr1
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 2, 1], [1, 4, 1, 4]));
