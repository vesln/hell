/**
 * Internal dependencies.
 */

var Base = require('./base');
var syntax = require('../syntax');

/**
 * Assignment node.
 *
 * @constructor
 */

function Assignment() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = [this.params.right];
}

/**
 * Inherit `Base`.
 */

Base.subclass(Assignment);

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
      ret.push(obj.property.name || obj.property.value || '?');
    } else {
      ret.push(obj.object.name)
      ret.push(obj.property.name || obj.property.value || '?');
    }
  })(left);

  return ret.join('.');
};

/**
 * Primary export.
 */

module.exports = Assignment;
