/**
 * Core dependencies.
 */

var inherits = require('util').inherits;

/**
 * Internal dependencies.
 */

var Formatter = require('../formatter');

/**
 * Rank formatter.
 */

function Rank() {
  Formatter.apply(this, arguments);
}

/**
 * Inherit `Formatter`.
 */

inherits(Rank, Formatter);

/**
 * Run the formatter.
 *
 * @api public
 */

Rank.prototype.run = function() {
  var rows = [];
  var longestScore = 0;
  var longestSignature = 0;
  var all = this.options.all;
  var min = this.options.min;

  this.sources.forEach(function(source) {
    source.walkContext(function(context) {
      if (!all && context.root()) return;
      if (min && context.totalScore() < min) return;
      longestSignature = Math.max(context.signature().length, longestSignature);
      longestScore = Math.max((context.totalScore() + '').length, longestScore);
      rows.push([context.totalScore(), context.signature(), source.path + ':' + context.location()]);
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
 * Primary export.
 */

module.exports = Rank;
