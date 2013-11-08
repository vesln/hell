/**
 * Context.
 *
 * @param {Node} node
 * @constructor
 */

function Context(node) {
  this.node = node;
  this._score = 0;
}

/**
 * Add `num` to the context score.
 *
 * @param {Number} num
 * @api public
 */

Context.prototype.addScore = function(num) {
  this._score += num;
};

/**
 * Return the total score.
 *
 * @api public
 */

Context.prototype.score = function() {
  return this._score;
};

/**
 * Return context signature.
 *
 * @returns {String}
 * @api public
 */

Context.prototype.signature = function() {
  return this.node.signature();
};

/**
 * Primary export.
 */

module.exports = Context;
