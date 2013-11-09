/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Call Expression.
 *
 * @constructor
 */

function Call() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Call);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Call.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.callee);
  this.params.arguments.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = Call;
