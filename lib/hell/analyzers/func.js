/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');
var syntax = require('../syntax');

/**
 * Function Declaration and Function Expression.
 *
 * @constructor
 */

function Func() {
  Analyzer.apply(this, arguments);
  this._score = 0;
  this._context = true;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Func);

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
  if (this.parent.type !== syntax.VariableDeclarator) return;
  return this.parent.id.name;
};

/**
 * When the function has been assigned to a variable,
 * return the variable name.
 *
 * @returns {String|undefined}
 * @api public
 */

Func.prototype.assignment = function() {
  if (this.parent.type !== syntax.AssignmentExpression) return;

  var ret = [];
  var left = this.parent.left;

  if (left.name) return left.name;

  (function search(obj) {
    if (obj.object.type === syntax.MemberExpression) {
      search(obj.object);
    } else {
      ret.push(obj.object.name);
    }
    ret.push(obj.property.name || obj.property.value || '?');
  })(left);

  return ret.join('.');
};

/**
 * Primary export.
 */

module.exports = Func;
