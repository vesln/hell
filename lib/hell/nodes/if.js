/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * If Statement.
 *
 * @constructor
 */

function If() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(If);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

If.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.test);
  fn.call(ctx, this.params.consequent);

  if (this.params.alternate) {
    fn.call(ctx, this.params.alternate);
  }
};

/**
 * Primary export.
 */

module.exports = If;
