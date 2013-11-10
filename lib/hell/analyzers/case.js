/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Switch Case.
 *
 * @constructor
 */

function Case() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Case);

/**
 * Primary export.
 */

module.exports = Case;
