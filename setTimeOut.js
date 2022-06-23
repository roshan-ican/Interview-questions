function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste Souha!");
}
x();

// print 1 to n with each and every seconds
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
  console.log("Namaste Souha!");
}
// the above program won't run with var keyword
function y() {
  for (var i = 1; i <= 6; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
      close(i);
    }
  }
  console.log("with var keyword");
}
y();
