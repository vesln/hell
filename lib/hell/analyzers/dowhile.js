/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Do While Statement.
 *
 * @constructor
 */

function DoWhile() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(DoWhile);

/**
 * Primary export.
 */

module.exports = DoWhile;
