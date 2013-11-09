/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Variable Declarator.
 *
 * @constructor
 */

function VarDeclarator() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(VarDeclarator);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

VarDeclarator.prototype.each = function(fn, ctx) {
  if (this.params.init) fn.call(ctx, this.params.init);
};

/**
 * Return identifier name.
 *
 * @returns {String}
 * @api public
 */

VarDeclarator.prototype.name = function() {
  return this.params.id.name;
};

/**
 * Primary export.
 */

module.exports = VarDeclarator;
