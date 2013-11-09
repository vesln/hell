/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Switch Case.
 *
 * @constructor
 */

function Case() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Case);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Case.prototype.each = function(fn, ctx) {
  if (this.params.test) fn.call(ctx, this.params.test);
  this.params.consequent.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = Case;
