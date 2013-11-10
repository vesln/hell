/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * For Statement.
 *
 * @constructor
 */

function For() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(For);

/**
 * Primary export.
 */

module.exports = For;
