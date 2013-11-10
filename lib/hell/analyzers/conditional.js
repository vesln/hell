/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Conditional Expression.
 *
 * @constructor
 */

function Conditional() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Conditional);

/**
 * Primary export.
 */

module.exports = Conditional;
