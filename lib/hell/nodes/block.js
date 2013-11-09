/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Block Statement.
 *
 * @constructor
 */

function Block() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Block);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Block.prototype.each = function(fn, ctx) {
  this.params.body.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = Block;
