/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * While Statement.
 *
 * @constructor
 */

function While() {
  Node.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Node`.
 */

Node.subclass(While);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

While.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.test);
  fn.call(ctx, this.params.body);
};

/**
 * Primary export.
 */

module.exports = While;
