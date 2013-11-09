/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * New Expression.
 *
 * @constructor
 */

function New() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(New);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

New.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.callee);
  this.params.arguments.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = New;
