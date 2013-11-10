/**
 * External dependencies.
 */

var traverse = require('estraverse').traverse;

/**
 * Internal dependencies.
 */

var Context = require('./context');
var syntax = require('./syntax');

/**
 * Analyzer.
 *
 * @constructor
 */

function Analyzer() {
  this.stack = [];
  this.contexts = [
    syntax.FunctionExpression,
    syntax.FunctionDeclaration,
    syntax.Program,
  ];
}

/**
 * Analyze a given file.
 *
 * @param {SourceFile} source
 * @api public
 */

Analyzer.prototype.analyze = function(source) {
  this.stack = [];
  this.source = source;
  this.traverse(source.ast());
};

/**
 * Walk a given `node`.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.traverse = function(ast) {
  var self = this;

  traverse(ast, {
    enter: function(node, parent) {
      if (self.contexts.indexOf(node.type) > -1) {
        node.context = true;
        self.pushContext(node, parent);
      }
      self.process(node);
    },
    leave: function(node) {
      if (node.context) {
        self.popContext();
      }
    }
  });
};

/**
 * Update the score.
 *
 * @param {Number} num
 * @api private
 */

Analyzer.prototype.add = function(num) {
  this.context().add(num);
};

/**
 * Add a new context into the stack.
 *
 * @param {Object} node
 * @param {Object} parent node
 * @api private
 */

Analyzer.prototype.pushContext = function(node, parentNode) {
  var parent = this.context();
  var context = new Context(node, parentNode);
  if (parent) {
    parent.children.push(context);
  }
  this.stack.push(context);
  this.source.add(context);
};

/**
 * Remove the latest context from the stack.
 *
 * @api private
 */

Analyzer.prototype.popContext = function() {
  this.stack.pop();
};

/**
 * Return the latest context.
 *
 * @returns {Context}
 * @api private
 */

Analyzer.prototype.context = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * Process `node`.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.process = function(node) {
  switch (node.type) {
    case syntax.VariableDeclarator:
    case syntax.AssignmentExpression:
      return this.add(3);
    case syntax.IfStatement:
      if (node.alternate) this.add(10);
      return this.add(10);
    case syntax.SwitchCase:
    case syntax.CatchClause:
    case syntax.ConditionalExpression:
    case syntax.DoWhileStatement:
    case syntax.ForStatement:
    case syntax.ForInStatement:
    case syntax.LogicalExpression:
    case syntax.SwitchStatement:
    case syntax.WhileStatement:
      return this.add(10);
  }
};

/**
 * Primary export.
 */

module.exports = Analyzer;
