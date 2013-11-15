var join = require('path').join;
var nixt = require('nixt');
var bin = join(__dirname, '..', 'bin');

var app = function() {
  return nixt({ newlines: false })
    .cwd(bin)
    .base('./hell ')
    .clone();
};

describe('cli', function() {
  describe('--version', function() {
    it('prints the app version', function(done) {
      app()
      .stdout(require('../package.json').version)
      .run('--version')
      .end(done);
    });
  });

  describe('--help', function() {
    it('prints help', function(done) {
      app()
      .stdout(/Usage: hell <path>/)
      .run('--help')
      .end(done);
    });
  });

  describe('main', function() {
    it('prints the results in JSON when the JSON formatter is specified', function(done) {
      app()
      .expect(function(res) {
        should.not.throw(function() {
          JSON.parse(res.stdout);
        });
      })
      .code(0)
      .run(fixture('signature.js') + ' --formatter json')
      .end(done);
    });
  });
});
