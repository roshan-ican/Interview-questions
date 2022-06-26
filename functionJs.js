// higher order function
function x() {
  console.log("Assalam Walikum");
}

function y(x) {
  x();
}

const radius = [2, 8, 6, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));
console.log(calculate(radius, area));

// The earlier code
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}

const result = arr.map((x) => x.toString(2));
console.log(result);

// filter
function isEven(x) {
  return x % 2 === 0;
}

const filterResult = arr.filter(function isOdd(x) {
  return x % 2;
});
const isEvenResult = arr.filter(isEven);

const greaterThan4 = arr.filter((x) => {
  return x > 4;
});
console.log(filterResult);
console.log(isEvenResult);
console.log(greaterThan4);
// you should be able to read the code but your viewers should be able to understand your code

// reduce
// it doesn't reduce anything
// sum or max
const reduceToSum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(reduceToSum);
// non functional way to reduce
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));
// findMax non functional way
function findMax(x) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

// reduce to Max

const reduceToMax = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(reduceToMax);

// more examples of reduce
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 76 },
  { firstName: "elon", lastName: "nusk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];
// map to fullName
const fullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);
// reduce
const reduceAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(reduceAge);

// filter with age
const filterWithAge = users.filter((x) => x.age === 26);
console.log(filterWithAge);
// name of all the people whose age is less than 30
const filterWithName = users.filter((y) => y.age < 30).map((x) => x.firstName);
console.log(filterWithName);
// above the solution with reduce

const reduceWithName = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(reduceWithName);

// given 8
// we have to create base and exponent
function base(x, y) {
  return x ** y;
}
console.log(base());
//
function base(n) {
  return n;
}
console.log(base(382));
