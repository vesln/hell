/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Expression node.
 *
 * @constructor
 */

function Expression() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = [this.params.expression];
}

/**
 * Inherit `Base`.
 */

Base.subclass(Expression);

/**
 * Primary export.
 */

module.exports = Expression;
