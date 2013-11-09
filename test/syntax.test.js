describe('hell', function() {
  it('can handle all nodes', function() {
    should.not.throw(function() {
      hell.analyzeFile(fixture('syntax.js'));
    });
  });
});
