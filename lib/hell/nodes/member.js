/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Member Expression.
 *
 * @constructor
 */

function Member() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Member);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Member.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.object);

  if (this.params.computed) {
    fn.call(ctx, this.params.property);
  }
};

/**
 * Primary export.
 */

module.exports = Member;
