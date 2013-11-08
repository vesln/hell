/**
 * Internal dependencies.
 */

var syntax = require('./syntax');
var nodes = require('./nodes');

/**
 * Node factory.
 *
 * @param {Object} node params
 * @param {Node} parent node
 * @api public
 */

module.exports = function(node, parent) {
  switch (node.type) {
    case syntax.Program:
      return new nodes.Program(node);
    case syntax.FunctionDeclaration:
    case syntax.FunctionExpression:
      return new nodes.Func(node, parent);
    case syntax.BlockStatement:
      return new nodes.Block(node, parent);
    case syntax.ExpressionStatement:
      return new nodes.Expression(node, parent);
    case syntax.AssignmentExpression:
      return new nodes.Assignment(node, parent);
    case syntax.CallExpression:
      return new nodes.Call(node, parent);
    case syntax.VariableDeclaration:
      return new nodes.VarDeclaration(node, parent);
    case syntax.VariableDeclarator:
      return new nodes.VarDeclarator(node, parent);
    case syntax.UnaryExpression:

    case syntax.ContinueStatement:
    case syntax.DebuggerStatement:
    case syntax.EmptyStatement:
    case syntax.NewExpression:
    case syntax.ReturnStatement:
    case syntax.ObjectExpression:
    case syntax.BreakStatement:
    case syntax.ThisExpression:
      return new nodes.Noop;
    default:
      throw new Error('I cannot handle nodes with type: ' + node.type);
  }
};
