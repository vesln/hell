/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Try Statement.
 *
 * @constructor
 */

function Try() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Try);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Try.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.block);
  this.params.handlers.forEach(fn, ctx);

  if (this.params.finalizer) {
    fn.call(ctx, this.params.finalizer);
  }
};

/**
 * Primary export.
 */

module.exports = Try;
