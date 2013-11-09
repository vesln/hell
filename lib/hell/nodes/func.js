/**
 * Internal dependencies.
 */

var Node = require('./node');
var syntax = require('../syntax');

/**
 * Function Declaration and Function Expression.
 *
 * @constructor
 */

function Func() {
  Node.apply(this, arguments);
  this._score = 0;
  this.context = true;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Func);

/**
 * Each.
 *
 * @param {Function} fn
 * @param {Object} context
 * @api public
 */

Func.prototype.each = function(fn, ctx) {
  fn.call(ctx, this.params.body);
};

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
