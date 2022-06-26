// what is a callBack function in Javascript

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// Javascript is a synchronous and single threaded language

// Blocking the main thread

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("end");
//million lines of code
let startDate = new Date.getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expires");

// deep about Event Listeners

// Closures Demo with event listeners

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListeners
