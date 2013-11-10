/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Catch Clause.
 *
 * @constructor
 */

function Catch() {
  Node.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Catch);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Catch.prototype.each = function(fn, ctx) {
  // TODO: missing body
  fn.call(ctx, this.params.body);
};

/**
 * Primary export.
 */

module.exports = Catch;
