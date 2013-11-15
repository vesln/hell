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

  this.score = {
    branch: 10,
    branchEmpty: 3,
    state: 3,
  };
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
 * Traverse.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.traverse = function(ast) {
  var self = this;

  if (!ast) return;

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
  var context = new Context(node, parentNode, this.stack.length);
  if (parent) parent.children.push(context);
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
      return this.addDeclarator(node);
    case syntax.AssignmentExpression:
      return this.addState(node);
    case syntax.IfStatement:
      return this.addIf(node);
    case syntax.SwitchCase:
      return this.addCase(node);
    case syntax.CatchClause:
    case syntax.ConditionalExpression:
    case syntax.DoWhileStatement:
    case syntax.ForStatement:
    case syntax.ForInStatement:
    case syntax.LogicalExpression:
    case syntax.WhileStatement:
      return this.addBranch();
  }
};

/**
 * Add score for a branch.
 *
 * @api private
 */

Analyzer.prototype.addBranch = function() {
  this.add(this.score.branch);
};

/**
 * Add score for switch cases.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.addCase = function(node) {
  var score = node.consequent.length
    ? this.score.branch
    : this.score.branchEmpty;

  this.add(score);
};

/**
 * Add score for if statements.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.addIf = function(node) {
  if (node.alternate) this.add(this.score.branch);
  this.add(this.score.branch);
};

/**
 * Add score for assignment expressions.
 *
 * @param {Object} node
 * @api private
 */

Analyzer.prototype.addState = function(node) {
  this.add(this.score.state);
};

/**
 * Add score for variable declarators.
 *
 * @parma {Object} node
 * @api private
 */

Analyzer.prototype.addDeclarator = function(node) {
  if (node.init) this.add(this.score.state);
};

/**
 * Primary export.
 */

module.exports = Analyzer;
