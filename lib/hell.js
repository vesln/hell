/**
 * Internal dependencies.
 */

var Analyzer = require('./hell/analyzer');
var SourceFile = require('./hell/source-file');

/**
 * Analyze given file.
 *
 * @param {String} path to file
 * @returns {SourceFile}
 * @api public
 */

exports.analyzeFile = function(path) {
  var analyzer = new Analyzer;
  var source = new SourceFile(path);
  analyzer.analyze(source);
  return source;
};

exports.process = function(files) {
  var analyzer = new Analyzer;

  var sources = files.map(function(file) {
    var source = new SourceFile(file);
    analyzer.analyze(source);
    return source;
  });

  return sources;
};
