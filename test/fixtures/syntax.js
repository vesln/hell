var foo = {};

new Foo(1, 2);

if (foo) {
  console.log('bar');
} else if (false) {
} else if (!true) {
} else {
}
if (foo) (function(){})
if (foo) var bar = 0;

if (a < b) var foo = 3;

foo.bar = 3;
foo[1] = 4;
foo['bar'] = 3;

i++; --i;

try {
} catch(e) {}
finally {
  throw (function() {
    return new Error();
  });
}

var i = a ? 'b' : c;

label:
true

options = options || {};

foo[a, b];

try {
} catch(e) {}

var foo = [1, 2, ,1];

with (foo) {
}

do {
  i++;
} while (true);

for (var i = 0; i < len; i++) {
}

for (var key in ob) {
}

while (true) {
}

switch(true) {
  case (1 > 2): true;
}
