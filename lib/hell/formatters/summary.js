/**
 * Internal dependencies.
 */

var Formatter = require('../formatter');

/**
 * Summary formatter.
 *
 * @constructor
 */

var Summary = Formatter.extend();

/**
 * Run the formatter.
 *
 * @api public
 */

Summary.prototype.run = function() {
  var rows = [];
  var len = 0;

  this.sources.forEach(function(source) {
    source.eachContext(function(context) {
      if (!context.root()) return;
      var score = context.score();

      if (score < this.options.min) return;
      score = this.toFixed(score);

      len = Math.max(source.path.length, len);
      rows.push([source.path, score]);
    }, this);
  }, this);

  rows.sort(function(a, b) {
    var first = +a[1];
    var second = +b[1];
    if (first > second) return -1;
    if (first < second) return 1;
    return 0;
  }).forEach(function(row) {
    this.print(this.ljust(row[0], len) + '  ' + row[1]);
  }, this);
};

/**
 * Primary export.
 */

module.exports = Summary;
