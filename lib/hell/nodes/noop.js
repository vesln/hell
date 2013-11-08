/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Noop node.
 *
 * @constructor
 */

function Noop() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = [];
}

/**
 * Inherit `Base`.
 */

Base.subclass(Noop);

/**
 * Primary export.
 */

module.exports = Noop;
