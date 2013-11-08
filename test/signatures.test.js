describe('hell', function() {
  var source = null;

  beforeEach(function() {
    source = hell.analyzeFile(fixture('signature.js'));
  });

  it('has a signature for Program', function() {
    source.contexts[0].signature().should.eq('main');
  });

  it('has a signature for named function', function() {
    source.contexts[1].signature().should.eq('named');
  });

  it('has a signature for anon functions', function() {
    source.contexts[2].signature().should.eq('anon');
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
