/**
 * Internal dependencies.
 */

var Formatter = require('../formatter');

/**
 * Tree formatter.
 *
 * @constructor
 */

var Tree = Formatter.extend();

/**
 * Run the formatter.
 *
 * @api public
 */

Tree.prototype.run = function() {
  var rows = [];
  var min = this.options.min;

  this.sources.forEach(function(source) {
    source.eachContext(function(context) {
      var score = context.score();

      if (score < min) {
        return;
      }

      var signature = context.root()
        ? source.path
        : context.signature();

      rows.push([
        '|' + Array(context.depth() + 2).join('--'),
        this.toFixed(score),
        signature,
      ]);
    }, this);

    rows.push(['', '', '', '']);

  }, this);

  rows.forEach(function(row) {
    this.print(row[0] + ' ' + row[1] + ' ' + row[2]);
  }, this);
};

/**
 * Primary export.
 */

module.exports = Tree;
