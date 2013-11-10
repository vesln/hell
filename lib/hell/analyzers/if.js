/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * If Statement.
 *
 * @constructor
 */

function If() {
  Analyzer.apply(this, arguments);
  this._score = 1;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(If);

/**
 * Calculate extra score based on if `else` existence.
 *
 * @returns {Number}
 * @api private
 */

If.prototype.extraScore = function() {
  return this.params.alternate ? 1 : 0;
};

/**
 * Primary export.
 */

module.exports = If;
