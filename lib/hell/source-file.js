/**
 * Core dependencies.
 */

var fs = require('fs');

/**
 * External dependencies.
 */

var parse = require('esprima').parse;

/**
 * Source file.
 *
 * @param {String} path
 * @constructor
 */

function SourceFile(path) {
  this.path = path;
  this.data = fs.readFileSync(path, 'utf8');
  this.fns = [];
}

/**
 * Return the AST of the file.
 *
 * @returns {Object}
 * @api public
 */

SourceFile.prototype.ast = function() {
  if (!this._ast) this._ast = parse(this.data, { loc: true });
  return this._ast;
};

/**
 * Register `node` as function.
 *
 * @param {Object} node
 * @returns {Object} node
 * @api public
 */

SourceFile.prototype.addFn = function(node) {
  this.fns.push(node);
  return node;
};

/**
 * Primary export.
 */

module.exports = SourceFile;
