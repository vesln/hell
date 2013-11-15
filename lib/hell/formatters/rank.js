/**
 * Internal dependencies.
 */

var Formatter = require('../formatter');

/**
 * Rank formatter.
 *
 * @constructor
 */

var Rank = Formatter.extend();

/**
 * Run the formatter.
 *
 * @api public
 */

Rank.prototype.run = function() {
  var rows = [];
  var longestScore = 0;
  var longestSignature = 0;

  this.sources.forEach(function(source) {
    source.eachContext(function(context) {
      var score = context.totalScore();
      var signature = context.signature();

      if (!this.all && context.root()) return;
      if (this.options.min && score < this.options.min) return;
      score = this.toFixed(score);

      longestSignature = Math.max(signature.length, longestSignature);
      longestScore = Math.max(score.length, longestScore);
      rows.push([score, signature, source.path + ':' + context.location()]);
    }, this);
  }, this);

  rows.sort(function(a, b) {
    var first = +a[0];
    var second = +b[0];
    if (first > second) return -1;
    if (first < second) return 1;
    return 0;
  }).forEach(function(row) {
    this.print(
      this.ljust(row[0], longestScore) + '  ' +
      this.ljust(row[1], longestSignature) + '  ' +
      row[2]);
  }, this);
};

/**
 * Primary export.
 */

module.exports = Rank;
