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
  this._score = 1;
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
 * Calculate extra score based on if `else` existence.
 *
 * @returns {Number}
 * @api private
 */

If.prototype.extraScore = function() {
  return this.params.alternate ? 1 : 0;
};

/**
 * Primary export.
 */

module.exports = If;
