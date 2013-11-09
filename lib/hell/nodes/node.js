/**
 * Core dependencies.
 */

var inherits = require('util').inherits;

/**
 * Node - parent for all other nodes.
 *
 * @param {Object} AST node
 * @param {Object} parent node
 * @param {Number} multiplier
 * @constructor
 */

function Node(params, parent, multiplier) {
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

Node.prototype.type = function() {
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

Node.prototype.isContext = function() {
  return this.context;
};

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Node.prototype.each = function(fn, ctx) {};

/**
 * Return the node score.
 *
 * @returns {Number}
 * @api public
 */

Node.prototype.score = function() {
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

Node.prototype.extraScore = function() {
  return 0;
};

/**
 * Inherit `Node`.
 *
 * @param {Function} klass
 * @api public
 */

Node.subclass = function(Klass) {
  Object.keys(this).forEach(function(key) {
    Klass[key] = this[key];
  });
  inherits(Klass, this);
};

/**
 * Primary export.
 */

module.exports = Node;
