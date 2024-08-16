var global = 'global'; // Global

function foo() {
    var local = 'local'; // Local
}

if (true) {
    var x = 5; // Global
}

(function () {
    var b = 20; // Local
})();



/* 렉시컬 스코프 */
var x = 1;

function foo1() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo1(); // 1
bar();  // 1