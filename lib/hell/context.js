/**
 * Context.
 *
 * @param {Node} node
 * @constructor
 */

function Context(node) {
  this.node = node;
  this.score = 0;
}

/**
 * Add `num` to the context score.
 *
 * @param {Number} num
 * @api public
 */

Context.prototype.addScore = function(num) {
  this.score += num;
};

/**
 * Primary export.
 */

module.exports = Context;
