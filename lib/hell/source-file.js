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
  this.contexts = [];
}

/**
 * Return the AST of the file.
 *
 * @returns {Object}
 * @api public
 */

SourceFile.prototype.ast = function() {
  if (typeof this._ast === 'undefined') this._ast = this.parseAst();
  return this._ast;
};

/**
 * Register new `context`.
 *
 * @param {Context} context
 * @api public
 */

SourceFile.prototype.add = function(context) {
  this.contexts.push(context);
};

/**
 * Walk contexts.
 *
 * @param {Function} function
 * @param {Object} ctx
 * @api public
 */

SourceFile.prototype.walkContext = function(fn, ctx) {
  var contexts = this.contexts;

  (function walk(context, depth) {
    context = context || contexts[0];
    if (!context) return;
    depth = depth || 0;
    fn.call(ctx, context, depth);
    depth++;
    context.children.forEach(function(child) {
      walk(child, depth);
    });
    depth--;
  })();
};

/**
 * Parse the given source file.
 *
 * @returns {Object}
 * @api private
 */

SourceFile.prototype.parseAst = function() {
  try {
    return parse(this.data, { loc: true });
  } catch (e) {}
};

/**
 * Primary export.
 */

module.exports = SourceFile;
