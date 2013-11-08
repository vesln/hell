/**
 * Internal dependencies.
 */

var Base = require('./base');

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
 * Primary export.
 */

module.exports = Assignment;
