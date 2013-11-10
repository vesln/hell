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
  if (!this._ast) this._ast = parse(this.data, { loc: true });
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
 * Execute `fn` for each context.
 *
 * @param {Function} function
 * @param {Object} function context
 * @api public
 */

SourceFile.prototype.eachContext = function(fn, ctx) {
  this.contexts.forEach(fn, ctx);
};

SourceFile.prototype.traverseContext = function(fn, ctx) {
  var contexts = this.contexts;

  (function walk(context, depth) {
    context = context || contexts[0];
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
 * Primary export.
 */

module.exports = SourceFile;
