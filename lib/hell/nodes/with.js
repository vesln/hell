/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * With Statement.
 *
 * @constructor
 */

function With() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(With);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

With.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.object);
  fn.call(ctx, this.params.body);
};

/**
 * Primary export.
 */

module.exports = With;
