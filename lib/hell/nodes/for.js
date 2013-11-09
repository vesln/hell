/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * For Statement.
 *
 * @constructor
 */

function For() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(For);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

For.prototype.each = function(fn, ctx) {
  if (this.params.init) fn.call(ctx, this.params.init);
  if (this.params.test) fn.call(ctx, this.params.test);
  if (this.params.update) fn.call(ctx, this.params.update);
};

/**
 * Primary export.
 */

module.exports = For;
