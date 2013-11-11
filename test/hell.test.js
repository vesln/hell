var SourceFile = require('../lib/hell/source-file');

describe('hell', function() {
  it('can analyze a single file', function() {
    hell.processFile(fixture('fns.js')).should.be.instanceOf(SourceFile);
  });

  it('can analyze multiple files at once', function() {
    hell.process([fixture('fns.js'), fixture('fns.js')]).should.have.lengthOf(2);
  });
});
