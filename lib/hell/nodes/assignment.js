/**
 * Internal dependencies.
 */

var Node = require('./node');
var syntax = require('../syntax');

/**
 * Assignment Expression.
 *
 * @constructor
 */

function Assignment() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Assignment);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Assignment.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.left);
  fn.call(ctx, this.params.right);
};

/**
 * Return a representation of the assigned object.
 *
 * Examples:
 *
 *     foo.bar.baz        => foo.bar.baz
 *     foo[0].baz         => foo.0.baz
 *     foo['baz']         => foo.baz
 *     foo[index()].boo   => foo.?.boo
 *
 * @returns {String}
 * @api public
 */

Assignment.prototype.name = function() {
  var ret = [];
  var left = this.params.left;

  if (left.name) return left.name;

  (function search(obj) {
    if (obj.object.type === syntax.MemberExpression) {
      search(obj.object);
    } else {
      ret.push(obj.object.name);
    }
    ret.push(obj.property.name || obj.property.value || '?');
  })(left);

  return ret.join('.');
};

/**
 * Primary export.
 */

module.exports = Assignment;
