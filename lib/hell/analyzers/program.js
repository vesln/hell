/**
 * Internal dependencies.
 */

var Analyzer = require('./analyzer');

/**
 * Program.
 *
 * @constructor
 */

function Program() {
  Analyzer.apply(this, arguments);
  this._score = 0;
  this._context = true;
}

/**
 * Inherit `Analyzer`.
 */

Analyzer.subclass(Program);

/**
 * Return node signature.
 *
 * @returns {String}
 * @api public
 */

Program.prototype.signature = function() {
  return 'main';
};

/**
 * Primary export.
 */

module.exports = Program;
