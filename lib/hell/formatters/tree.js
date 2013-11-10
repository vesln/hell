/**
 * Core dependencies.
 */

var inherits = require('util').inherits;

/**
 * Internal dependencies.
 */

var Formatter = require('../formatter');

/**
 * Tree formatter.
 *
 * @constructor
 */

function Tree() {
  Formatter.apply(this, arguments);
}

/**
 * Inherit `Formatter`.
 */

inherits(Tree, Formatter);

/**
 * Run the formatter.
 *
 * @api public
 */

Tree.prototype.run = function() {
  var rows = [];
  var min = this.options.min;

  this.sources.forEach(function(source) {
    source.walkContext(function(context, depth) {
      var score = context.root()
        ? context.totalScore()
        : context.score();

      if (score < min) return;

      var signature = context.root()
        ? source.path
        : context.signature();

      rows.push([
        '|' + Array(depth + 2).join('--'),
        score,
        signature,
      ]);
    });
    rows.push(['', '', '', '']);
  });

  rows.forEach(function(row) {
    this.print(row[0] + ' ' + row[1] + ' ' + row[2]);
  }, this);
};

/**
 * Primary export.
 */

module.exports = Tree;
