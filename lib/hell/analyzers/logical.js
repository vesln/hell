/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Logical Expression.
 *
 * @constructor
 */

function Logical() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Logical);

/**
 * Primary export.
 */

module.exports = Logical;
