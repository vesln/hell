/**
 * Internal dependencies.
 */

var createNode = require('./node');

/**
 * Processor.
 *
 * @constructor
 */

function Processor() {
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
  this.walk(createNode(source.ast()));
};

/**
 * Walk a given `node`.
 *
 * @param {Node} node
 * @api private
 */

Processor.prototype.walk = function(node) {
  var context = node.isContext();

  if (context) this.pushContext(node);
  if (node.type) this.processNode(node);

  node.eachChild(function(child) {
    this.walk(createNode(child, node));
  }, this);

  if (context) this.popContext();
};

/**
 * Process `node`.
 *
 * @param {Object} node
 * @api private
 */

Processor.prototype.processNode = function(node) {
  return;
  this.currentContext().addScore(node.score());
};

/**
 * Add a new context into the stack.
 *
 * @param {Node} node
 * @api private
 */

Processor.prototype.pushContext = function(node) {
  this.stack.push(node);
  this.source.addFn(node);
};

/**
 * Add a new context into the stack.
 *
 * @param {Node} node
 * @api private
 */

Processor.prototype.popContext = function() {
  this.stack.pop();
};

/**
 * Return the current context.
 *
 * @returns {Node}
 * @api private
 */

Processor.prototype.currentContext = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * Primary export.
 */

module.exports = Processor;
