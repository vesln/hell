/**
 * External dependencies.
 */

var traverse = require('estraverse').traverse;

/**
 * Internal dependencies.
 */

var Context = require('./context');
var create = require('./analyzers').create;

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
  this.traverse(source.ast());
};

/**
 * Walk a given `node`.
 *
 * @param {Node} node
 * @api private
 */

Processor.prototype.traverse = function(ast) {
  var self = this;

  traverse(ast, {
    enter: function(node, parent) {
      var analyzer = create(node, parent);
      if (analyzer.context()) {
        node.context = true;
        self.pushContext(analyzer);
      }
      self.process(analyzer);
    },
    leave: function(node) {
      if (node.context) {
        self.popContext();
      }
    }
  });
};

/**
 * Process `node`.
 *
 * @param {Analyzer} analyzer
 * @api private
 */

Processor.prototype.process = function(analyzer) {
  this.context().addScore(analyzer.score());
};

/**
 * Add a new context into the stack.
 *
 * @param {Analyzer} analyzer
 * @api private
 */

Processor.prototype.pushContext = function(analyzer) {
  var context = new Context(analyzer);
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
