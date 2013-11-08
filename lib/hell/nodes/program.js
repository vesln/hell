/**
 * Internal dependencies.
 */

var Base = require('./base');

/**
 * Program node.
 *
 * @constructor
 */

function Program() {
  Base.apply(this, arguments);
  this._score = 0;
  this.context = true;
  this.children = this.params.body;
}

/**
 * Inherit `Base`.
 */

Base.subclass(Program);

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
