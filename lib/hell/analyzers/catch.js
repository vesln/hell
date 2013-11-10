/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Catch Clause.
 *
 * @constructor
 */

function Catch() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Catch);

/**
 * Primary export.
 */

module.exports = Catch;
