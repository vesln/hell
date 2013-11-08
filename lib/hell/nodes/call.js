/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Call node.
 *
 * @constructor
 */

function Call() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = this.params.arguments;
}

/**
 * Inherit `Base`.
 */

Base.subclass(Call);

/**
 * Primary export.
 */

module.exports = Call;
