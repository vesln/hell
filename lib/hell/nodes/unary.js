/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Unary Expression.
 *
 * @constructor
 */

function Unary() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Unary);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Unary.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.argument);
};

/**
 * Primary export.
 */

module.exports = Unary;
