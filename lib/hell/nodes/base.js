/**
 * Core dependencies.
 */

var inherits = require('util').inherits;

/**
 * Base node - parent for all other nodes.
 *
 * @param {Object} AST node
 * @param {Object} parent node
 * @param {Number} multiplier
 * @constructor
 */

function Base(params, parent, multiplier) {
  this.params = params;
  this.parent = parent;
  this.multiplier = (multiplier || 0) + 1;
  this.context = false;
}

/**
 * Return the node type.
 *
 * @returns {String}
 * @api public
 */

Base.prototype.type = function() {
  return this.params.type;
};

/**
 * Return if the node is context or not.
 *
 * Override in child nodes.
 *
 * @returns {Boolean}
 * @api public
 */

Base.prototype.isContext = function() {
  return this.context;
};

/**
 * Iterate over each child.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Base.prototype.eachChild = function(fn, ctx) {
  this.children.forEach(fn, ctx);
};

/**
 * Return the node score.
 *
 * @returns {Number}
 * @api public
 */

Base.prototype.score = function() {
  return (this.extraScore() + this._score) * this.multiplier;
};

/**
 * Return extra score if any.
 *
 * Override in child nodes.
 *
 * @returns {Number}
 * @api private
 */

Base.prototype.extraScore = function() {
  return 0;
};

/**
 * Inherit `Base`.
 *
 * @param {Function} klass
 * @api public
 */

Base.subclass = function(Klass) {
  inherits(Klass, Base);
};

/**
 * Primary export.
 */

module.exports = Base;
