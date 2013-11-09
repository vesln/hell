/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Expression Statement.
 *
 * @constructor
 */

function Expression() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Expression);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Expression.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.expression);
};

/**
 * Primary export.
 */

module.exports = Expression;
