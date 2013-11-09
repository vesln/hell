/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Array Expression.
 *
 * @constructor
 */

function Arr() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Arr);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Arr.prototype.each = function(fn, ctx) {
  this.params.elements.forEach(function(el) {
    if (el) fn.call(ctx, el);
  });
};

/**
 * Primary export.
 */

module.exports = Arr;
