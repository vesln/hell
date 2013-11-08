/**
 * Internal dependencies.
 */

var Base = require('./base');
var syntax = require('../syntax');

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
 * Return node signature.
 *
 * @returns {String}
 * @api public
 */

Func.prototype.signature = function() {
  return this.named()
    || this.vardec()
    || this.assignment()
    || 'anon';
};

/**
 * Return the name of a named function.
 *
 * @returns {String|undefined}
 * @api public
 */

Func.prototype.named = function() {
  if (!this.params.id || !this.params.id.name) return;
  return this.params.id.name;
};

/**
 * When the function is a part of variable declaration,
 * return the variable identifier.
 *
 * @returns {String|undefined}
 * @api public
 */

Func.prototype.vardec = function() {
  if (this.parent.type() !== syntax.VariableDeclarator) return;
  return this.parent.name();
};


/**
 * When the function has been assigned to a variable,
 * return the variable name.
 *
 * @returns {String|undefined}
 * @api public
 */

Func.prototype.assignment = function() {
  if (this.parent.type() !== syntax.AssignmentExpression) return;
  return this.parent.name();
};

/**
 * Primary export.
 */

module.exports = Func;
