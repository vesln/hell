/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * VarDeclarator node.
 *
 * @constructor
 */

function VarDeclarator() {
  Base.apply(this, arguments);
  this._score = 0;
  this.children = [this.params.init];
}

/**
 * Inherit `Base`.
 */

Base.subclass(VarDeclarator);

/**
 * Return identifier name.
 *
 * @returns {String}
 * @api public
 */

VarDeclarator.prototype.name = function() {
  return this.params.id.name;
};

/**
 * Primary export.
 */

module.exports = VarDeclarator;
