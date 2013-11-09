/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Return Statement.
 *
 * @constructor
 */

function Ret() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Ret);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Ret.prototype.each = function(fn, ctx) {
  if (this.params.argument) {
    fn.call(ctx, this.params.argument);
  }
};

/**
 * Primary export.
 */

module.exports = Ret;
