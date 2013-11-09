/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Binary Expression.
 *
 * @constructor
 */

function Binary() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Binary);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Binary.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.left);
  fn.call(ctx, this.params.right);
};

/**
 * Primary export.
 */

module.exports = Binary;
