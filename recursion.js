// understaning recursion
function takeShower() {
  console.log("Showering");
  return "Showering";
}
function eatBreakFast() {
  let meal = cookFood();
  console.log(`Eating ${meal}`);
  return `Eating ${meal}`;
}
function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];

  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakFast();
  console.log("Ok ready to go for the work!");
}
wakeUp();

// countdown
function countdown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}
console.log(countdown(5));
// print 5
// countDown(4)
//print 4
// countDown(3)
// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print "All done"

// Our second recursive function
function sumRange(num) {
  // the base case
  if (num === 1) return 1;
  // here is our recursive call
  return num + sumRange(num - 1);
}
console.log(sumRange(4));
// factorial
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));

// collecting odd recursively
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// without helper methods
// pure recursion way to collect odd values
function collectOddRecursively(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddRecursively(arr.slice(1)));
  return newArr;
}
console.log(collectOddRecursively([1, 2, 3, 4, 13, 14, 15]));

// collectOddRecursively([1, 2, 3, 4, 13, 14, 15])[1]
//   .concat(collectOddRecursively[(2, 3, 4, 13, 14, 15)])[]
//   .concat(collectOddRecursively[(3, 4, 13, 14, 15)])[3]
//   .concat(collectOddRecursively[(4, 13, 14, 15)]);

// write a function that returns the power of a num recursively
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(`power is power: ${power(2, 4)}`);
////////////////////////////////////////////////////

// Write a factorial recursively
function factoriall(num) {
  if (x < 0) return 0;
  if (num <= 1) return 1;
  return num * factoriall(num - 1);
}
console.log(`The Factorial is ${factorial(15)}`);
///////////////////////////////////////////////////
// product of all the array recursively
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(
  `The Multiple of all the number is ${productOfArray([1, 2, 3, 4, 5])}`
);
////////////////////////////////////////////////////
// recursive range
function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}
console.log(`The recursive range is ${recursiveRange(10)}`);
////////////////////////////////////////////////////
// fibonacci solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(`The fibbonaci sequence is ${fib(35)}`);
//////////////////////////////////////////////////
// reverse a string recursively
function reverse(string) {
  // add whatever parameters you deem necessary - good luck!
  // Base case
  if (string.length < 2) return string;
  // Recursive case
  return reverse(string.slice(1, string.length)) + string[0];
}
console.log(`Reversed: ${reverse("awesome")}`);
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
//////////////////////////////////////////////
// isPalindrome recursively
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
//////////////////////////////////////////////
// someRecursive Solution
// weird way to get odd
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

// hoasting

getName();
console.log(x);
console.log(getName);

var x = 2;
function getName() {
  console.log("finish Namaste Javascript");
}
// getName();
// console.log(x);
// console.log(getName);
///////////////////////////////////////
var x = 2;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 200;
  console.log(x);
}

// not defined and undefined
var a;
console.log(a);
a = 500;
if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}

// this keyword
var a = 111;
function b() {
  var x = 222;
}
console.log(this.x);
console.log(this.a);
console.log(a);
console.log(x);

// closure
function xz() {
  var a = 7;
  return function y() {
    console.log(a);
  };
  // function along with the lexical scope is returned by this y
}
var z = xz();
console.log(z);
z();

//
function zee() {
  function xz() {
    var a = 7;
    function y() {
      console.log(a);
    }
    // function along with the lexical scope is returned by this y
    y();
  }
  xz();
}
zee();
