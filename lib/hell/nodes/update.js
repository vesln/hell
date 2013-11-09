/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Update Expression.
 *
 * @constructor
 */

function Update() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Update);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Update.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.argument);
};

/**
 * Primary export.
 */

module.exports = Update;
