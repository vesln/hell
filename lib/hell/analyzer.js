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
 * @returns {SourceFile}
 * @api public
 */

Analyzer.prototype.analyze = function(source) {
  this.source = source;
  this.traverse(source.ast());
};

/**
 * Walk a given `node`.
 *
 * @param {Node} node
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
 * Process `node`.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.process = function(node) {
  switch (node.type) {
    case syntax.SwitchCase: return this.analyzeCase();
    case syntax.CatchClause: return this.analyzeCatch();
    case syntax.ConditionalExpression: return this.analyzeConditional();
    case syntax.DoWhileStatement: return this.analyzeDo();
    case syntax.ForStatement: return this.analyzeFor();
    case syntax.ForInStatement: return this.analyzeForIn();
    case syntax.IfStatement: return this.analyzeIf();
    case syntax.LogicalExpression: return this.analyzeLogical();
    case syntax.SwitchStatement: return this.analyzeSwitch();
    case syntax.WhileStatement: return this.analyzeWhile();
  }
};

/**
 * Add a new context into the stack.
 *
 * @param {Analyzer} analyzer
 * @api private
 */

Analyzer.prototype.pushContext = function(node, parent) {
  var context = new Context(node, parent);
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
 * Analyze SwitchCase.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeCase = function(node) {
  this.add(1);
};

/**
 * Analyze CatchClause.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeCatch = function(node) {
  this.add(1);
};

/**
 * Analyze ConditionalExpression.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeConditional = function(node) {
  this.add(1);
};

/**
 * Analyze DoWhileStatement.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeDo = function(node) {
  this.add(1);
};

/**
 * Analyze ForStatement.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeFor = function(node) {
  this.add(1);
};

/**
 * Analyze ForInStatement.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeForIn = function(node) {
  this.add(1);
};

/**
 * Analyze IfStatement.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeIf = function(node) {
  this.add(1);
};

/**
 * Analyze LogicalExpression.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeLogical = function(node) {
  this.add(1);
};

/**
 * Analyze SwitchCase.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeSwitch = function(node) {
  this.add(1);
};

/**
 * Analyze WhileStatement.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.analyzeWhile = function(node) {
  this.add(1);
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
 * Primary export.
 */

module.exports = Analyzer;
