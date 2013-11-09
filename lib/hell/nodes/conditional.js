/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Conditional Expression.
 *
 * @constructor
 */

function Conditional() {
  Node.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Conditional);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Conditional.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.test);
  fn.call(ctx, this.params.consequent);
  fn.call(ctx, this.params.alternate);
};

/**
 * Primary export.
 */

module.exports = Conditional;
