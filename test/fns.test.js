describe('function declarations', function() {
  it('can return all declared functions', function() {
    var source = hell.processFile(fixture('fns.js'));
    source.contexts.should.have.lengthOf(8);
  });
});
