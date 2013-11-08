/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Func node.
 *
 * @constructor
 */

function Func() {
  Base.apply(this, arguments);
  this._score = 0;
  this.context = true;
  this.children = [this.params.body];
}

/**
 * Inherit `Base`.
 */

Base.subclass(Func);

/**
 * Primary export.
 */

module.exports = Func;
