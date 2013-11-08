function foo() {
}

function bar() {
  function baz() {
    function Fn() {}
  }
}

Fn.prototype.test = function() {};

var fn = function() {};

run(function() {

});
