/**
 * Internal dependencies.
 */

var Node = require('./node');

/**
 * Noop node.
 *
 * @constructor
 */

function Noop() {
  Node.apply(this, arguments);
  this._score = 0;
}

/**
 * Inherit `Node`.
 */

Node.subclass(Noop);

/**
 * Primary export.
 */

module.exports = Noop;
