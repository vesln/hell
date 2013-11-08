/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Program node.
 *
 * @constructor
 */

function Program() {
  Base.apply(this, arguments);
  this._score = 0;
  this.context = true;
  this.children = this.params.body;
}

/**
 * Inherit `Base`.
 */

Base.subclass(Program);

/**
 * Primary export.
 */

module.exports = Program;
