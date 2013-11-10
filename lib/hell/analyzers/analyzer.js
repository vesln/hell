/**
 * Core dependencies.
 */

var inherits = require('util').inherits;

/**
 * Analyzer - parent for other analyzers.
 *
 * @param {Object} AST node
 * @param {Object} parent node
 * @param {Number} multiplier
 * @constructor
 */

function Analyzer(params, parent, multiplier) {
  this.params = params;
  this.parent = parent;
  this.multiplier = (multiplier || 0) + 1;
  this._context = false;
}

/**
 * Return if the node is context or not.
 *
 * Override in child nodes.
 *
 * @returns {Boolean}
 * @api public
 */

Analyzer.prototype.context = function() {
  return this._context;
};

/**
 * Return the node score.
 *
 * @returns {Number}
 * @api public
 */

Analyzer.prototype.score = function() {
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

Analyzer.prototype.extraScore = function() {
  return 0;
};

/**
 * Inherit `Analyzer`.
 *
 * @param {Function} klass
 * @api public
 */

Analyzer.subclass = function(Klass) {
  Object.keys(this).forEach(function(key) {
    Klass[key] = this[key];
  });
  inherits(Klass, this);
};

/**
 * Primary export.
 */

module.exports = Analyzer;
