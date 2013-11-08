/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * VarDeclaration node.
 *
 * @constructor
 */

function VarDeclaration() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = this.params.declarations;
}

/**
 * Inherit `Base`.
 */

Base.subclass(VarDeclaration);

/**
 * Primary export.
 */

module.exports = VarDeclaration;
