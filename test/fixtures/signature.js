function named() {}

(function() {})();

var foo = function() {};

foo = function() {};

foo.bar = function() {};

foo.bar.baz = function() {};

foo.bar.baz.boo = function() {};

foo.bar.baz.boo.moo = function() {};

foo['bar'] = function() {}
foo['bar']['baz'] = function() {}
foo['bar']['baz']['boo'] = function() {}

foo[1]['baz'] = function() {}

foo['baz'].bar = function() {}
foo[index()].bar = function() {}
foo[1] = function() {}
