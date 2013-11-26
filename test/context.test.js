var Context = require('../lib/hell/context');
var syntax = require('../lib/hell/syntax');

describe('Context', function() {
  describe('#signature', function() {
    var source = hell.processFile(fixture('signature.js'));

    it('has a signature for Program', function() {
      source.contexts[0].signature().should.eq('*');
    });

    it('has a signature for named function', function() {
      source.contexts[1].signature().should.eq('named');
    });

    it('has a signature for anonymous functions', function() {
      source.contexts[2].signature().should.eq('anonymous');
    });

    it('has a signature for assigned functions', function() {
      source.contexts[3].signature().should.eq('foo');
      source.contexts[4].signature().should.eq('foo');
      source.contexts[5].signature().should.eq('foo.bar');
      source.contexts[6].signature().should.eq('foo.bar.baz');
      source.contexts[7].signature().should.eq('foo.bar.baz.boo');
      source.contexts[8].signature().should.eq('foo.bar.baz.boo.moo');
      source.contexts[9].signature().should.eq('foo.bar');
      source.contexts[10].signature().should.eq('foo.bar.baz');
      source.contexts[11].signature().should.eq('foo.bar.baz.boo');
      source.contexts[12].signature().should.eq('foo.1.baz');
      source.contexts[13].signature().should.eq('foo.baz.bar');
      source.contexts[14].signature().should.eq('foo.?.bar');
      source.contexts[15].signature().should.eq('foo.1');
    });
  });

  describe('#depth', function() {
    it('returns its depth', function() {
      var context = new Context(null, null, 4);
      context.depth().should.eq(4);
    });
  });

  describe('#score', function() {
    it('returns its score and the score of its children', function() {
      var main = new Context;
      var child = new Context;
      main.add(3);
      child.add(4);
      main.children.push(child);

      main.score().should.eq(7);
    });
  });

  describe('#location', function() {
    it('returns 0 when the context is a Program node', function() {
      var node = { type: syntax.Program };
      var context = new Context(node);
      context.location().should.eq(0);
    });

    it('returns the start line of the node when it is not a Program node', function() {
      var node = { loc: { start: { line: 3 } } };
      var context = new Context(node);
      context.location().should.eq(3);
    });
  });

  describe('#toJSON', function() {
    it('returns a JSON friendly representation of the object', function() {
      var node = { type: syntax.Program };
      var context = new Context(node);

      context.add(3);

      context.toJSON().should.eql({
        score: 3,
        signature: '*',
        location: 0
      });
    });
  });
});
