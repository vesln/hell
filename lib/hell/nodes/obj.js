/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Object Expression.
 *
 * @constructor
 */

function Obj() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Obj);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Obj.prototype.each = function(fn, ctx) {
  this.params.properties.forEach(fn, ctx);
};

/**
 * Primary export.
 */

module.exports = Obj;
