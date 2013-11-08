/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Block node.
 *
 * @constructor
 */

function Block() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = this.params.body;
}

/**
 * Inherit `Base`.
 */

Base.subclass(Block);

/**
 * Primary export.
 */

module.exports = Block;
