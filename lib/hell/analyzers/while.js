/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * While Statement.
 *
 * @constructor
 */

function While() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(While);

/**
 * Primary export.
 */

module.exports = While;
