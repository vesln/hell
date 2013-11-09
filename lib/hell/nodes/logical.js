/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Logical Expression.
 *
 * @constructor
 */

function Logical() {
  Node.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Logical);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Logical.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.left);
  fn.call(ctx, this.params.right);
};

/**
 * Primary export.
 */

module.exports = Logical;
