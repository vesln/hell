/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Throw Statement.
 *
 * @constructor
 */

function Throw() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Throw);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Throw.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.argument);
};

/**
 * Primary export.
 */

module.exports = Throw;
