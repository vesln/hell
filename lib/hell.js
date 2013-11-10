/**
 * Internal dependencies.
 */

var Analyzer = require('./hell/analyzer');
var SourceFile = require('./hell/source-file');

/**
 * Process an array of files
 *
 * @param {Array} files
 * @returns {SourceFile}
 * @api public
 */

exports.process = function(files) {
  var analyzer = new Analyzer;

  var sources = files.map(function(file) {
    var source = new SourceFile(file);
    analyzer.analyze(source);
    return source;
  });

  return sources;
};

/**
 * Process single file.
 *
 * @param {String} path to file
 * @returns {SourceFile}
 * @api public
 */

exports.processFile = function(file) {
  return this.process([file])[0];
};
