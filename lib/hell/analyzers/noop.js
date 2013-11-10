/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Noop node.
 *
 * @constructor
 */

function Noop() {
  Analyzer.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Noop);

/**
 * Primary export.
 */

module.exports = Noop;
