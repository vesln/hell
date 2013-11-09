/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Do While Statement.
 *
 * @constructor
 */

function DoWhile() {
  Node.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Node`.
 */

Node.subclass(DoWhile);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

DoWhile.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.test);
  fn.call(ctx, this.params.body);
};

/**
 * Primary export.
 */

module.exports = DoWhile;
