/**
 * Base formatter.
 *
 * @param {Array} sources
 * @param {WritableStream} stream
 * @param {Object} options
 * @constructor
 */

function Formatter(sources, out, options) {
  this.out = out;
  this.sources = sources;
  this.options = options;
}

/**
 * Print given `msg`.
 *
 * @param {String} msg
 * @param {Number} padding
 * @api private
 */

Formatter.prototype.print = function(msg, padding) {
  padding = padding || 0;
  msg = msg || '';
  this.out.write(Array(padding).join(' ') + msg + '\n');
};

/**
 * Consistent number formatting.
 *
 * @param {Number} num
 * @returns {String}
 * @api private
 */

Formatter.prototype.toFixed = function(num) {
  return num.toFixed(2);
};

/**
 * If `width` is greater than the length of `str`, return a new string of length `width`
 * with `str` left justified
 *
 * @param {String} str
 * @param {Number} width
 * @returns {String}
 * @api private
 */

Formatter.prototype.ljust = function(str, width) {
  str += '';
  var len = Math.max(0, width - str.length);
  return str + Array(len + 1).join(' ');
};

/**
 * Primary export.
 */

module.exports = Formatter;
