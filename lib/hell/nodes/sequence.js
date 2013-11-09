/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Sequence Expression.
 *
 * @constructor
 */

function Sequence() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Sequence);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Sequence.prototype.each = function(fn, ctx) {
  this.params.expressions.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = Sequence;
