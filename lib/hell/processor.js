/**
 * Internal dependencies.
 */

var Context = require('./context');
var createNode = require('./nodes').create;

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

  this.processNode(node);

  node.each(function(obj) {
    this.walk(createNode(obj, node));
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
  this.context().addScore(node.score());
};

/**
 * Add a new context into the stack.
 *
 * @param {Node} node
 * @api private
 */

Processor.prototype.pushContext = function(node) {
  var context = new Context(node);
  this.stack.push(context);
  this.source.add(context);
};

/**
 * Remove the latest context from the stack.
 *
 * @api private
 */

Processor.prototype.popContext = function() {
  this.stack.pop();
};

/**
 * Return the latest context.
 *
 * @returns {Context}
 * @api private
 */

Processor.prototype.context = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * Primary export.
 */

module.exports = Processor;
