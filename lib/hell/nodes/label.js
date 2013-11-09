/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Labeled Statement.
 *
 * @constructor
 */

function Label() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Label);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Label.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.body);
};

/**
 * Primary export.
 */

module.exports = Label;
