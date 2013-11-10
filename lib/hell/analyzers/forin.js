/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * For In Statement.
 *
 * @constructor
 */

function Forin() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Forin);

/**
 * Primary export.
 */

module.exports = Forin;
