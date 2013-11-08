/**
 * Internal dependencies.
 */

var Processor = require('./hell/processor');
var SourceFile = require('./hell/source-file');

/**
 * Analyze given file.
 *
 * @param {String} path to file
 * @returns {SourceFile}
 * @api public
 */

exports.analyzeFile = function(path) {
  var processor = new Processor;
  var source = new SourceFile(path);
  processor.analyze(source);
  return source;
};
