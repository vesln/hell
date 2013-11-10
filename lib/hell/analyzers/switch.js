/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Switch Statement.
 *
 * @constructor
 */

function Switch() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Switch);

/**
 * Primary export.
 */

module.exports = Switch;
