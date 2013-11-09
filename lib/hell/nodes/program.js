/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Program.
 *
 * @constructor
 */

function Program() {
  Node.apply(this, arguments);
  this._score = 0;
  this.context = true;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Program);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Program.prototype.each = function(fn, ctx) {
  this.params.body.forEach(fn, ctx);
};

/**
 * Return node signature.
 *
 * @returns {String}
 * @api public
 */

Program.prototype.signature = function() {
  return 'main';
};

/**
 * Primary export.
 */

module.exports = Program;
