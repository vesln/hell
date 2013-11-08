/**
 * Internal dependencies.
 */

var syntax = require('./syntax');

/**
 * Processor.
 *
 * @constructor
 */

function Processor() {
  this.multiplier = 1;
  this.stack = [];
}

/**
 * Analyze a given file.
 *
 * @param {SourceFile} source
 * @returns {SourceFile}
 * @api public
 */

Processor.prototype.analyze = function(source) {
  this.source = source;
  this.walk(source.ast());
};

Processor.prototype.walk = function(node) {
  var pushed = false;

  if (this.scope(node.type) ) {
    this.push(node);
    pushed = true;
  }

  if (node.type) this.node(node);

  Object.keys(node).forEach(function(key) {
    if ('parent' === key) return;
    if (Object(node[key]) === node[key]) {
      node[key].parent = node;
      this.walk(node[key]);
    }
  }, this);

  if (pushed) this.pop();
};

Processor.prototype.scope = function(type) {
  return type === syntax.FunctionDeclaration
    || type === syntax.FunctionExpression
    || type === syntax.Program;
};

Processor.prototype.node = function(node) {
};

Processor.prototype.push = function(node) {
  this.stack.push(node);
  this.source.addFn(node);
};

Processor.prototype.pop = function(node) {
  this.stack.pop(node);
};

/**
 * Primary export.
 */

module.exports = Processor;
