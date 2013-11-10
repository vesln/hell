function Formatter(sources, out) {
  this.out = out;
  this.sources = sources;
}

Formatter.prototype.run = function() {
  var rows = [];
  var longestSignature = 0;
  var longestScore = 0;

  this.sources.forEach(function(source) {
    source.eachContext(function(context) {
      longestSignature = Math.max(context.signature().length, longestSignature);
      longestScore = Math.max((context.score() + '').length, longestScore);
      rows.push([context.score(), context.signature(), source.path + ':' + context.location()]);
    });
  });

  rows.sort(function(a, b) {
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  }).forEach(function(row) {
    this.print(this.ljust(row[0], longestScore) + '  ' + this.ljust(row[1], longestSignature) + '  ' + row[2]);
  }, this);
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

module.exports = Formatter;
