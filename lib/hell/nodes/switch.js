/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Switch Statement.
 *
 * @constructor
 */

function Switch() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Switch);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Switch.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.discriminant);
  this.params.cases.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = Switch;
