/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * For In Statement.
 *
 * @constructor
 */

function Forin() {
  Node.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Forin);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Forin.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.left);
  fn.call(ctx, this.params.right);
  fn.call(ctx, this.params.body);
};

/**
 * Primary export.
 */

module.exports = Forin;
