/**
 * Internal dependencies.
 */

var syntax = require('../syntax');

/**
 * Export all nodes.
 */

var nodes = {};

nodes[syntax.Program] = require('./program');
nodes[syntax.BlockStatement] = require('./block');
nodes[syntax.CallExpression] = require('./call');
nodes[syntax.IfStatement] = require('./if');
nodes[syntax.TryStatement] = require('./try');
nodes[syntax.CatchClause] = require('./catch');
nodes[syntax.NewExpression] = require('./new');
nodes[syntax.ForStatement] = require('./for');
nodes[syntax.SwitchCase] = require('./case');
nodes[syntax.WithStatement] = require('./with');
nodes[syntax.ReturnStatement] = require('./ret');
nodes[syntax.ArrayExpression] = require('./arr');
nodes[syntax.ForInStatement] = require('./forin');
nodes[syntax.WhileStatement] = require('./while');
nodes[syntax.ObjectExpression] = require('./obj');
nodes[syntax.ThrowStatement] = require('./throw');
nodes[syntax.UnaryExpression] = require('./unary');
nodes[syntax.LabeledStatement] = require('./label');
nodes[syntax.SwitchStatement] = require('./switch');
nodes[syntax.MemberExpression] = require('./member');
nodes[syntax.UpdateExpression] = require('./update');
nodes[syntax.BinaryExpression] = require('./binary');
nodes[syntax.DoWhileStatement] = require('./dowhile');
nodes[syntax.LogicalExpression] = require('./logical');
nodes[syntax.SequenceExpression] = require('./sequence');
nodes[syntax.ExpressionStatement] = require('./expression');
nodes[syntax.AssignmentExpression] = require('./assignment');
nodes[syntax.VariableDeclarator] = require('./var-declarator');
nodes[syntax.ConditionalExpression] = require('./conditional');
nodes[syntax.VariableDeclaration] = require('./var-declaration');

nodes[syntax.FunctionDeclaration] =
nodes[syntax.FunctionExpression] = require('./func');

nodes[syntax.Literal] =
nodes[syntax.Identifier] =
nodes[syntax.ThisExpression] =
nodes[syntax.EmptyStatement] =
nodes[syntax.BreakStatement] =
nodes[syntax.ContinueStatement] =
nodes[syntax.DebuggerStatement] = require('./noop');

/**
 * Node factory.
 *
 * @param {Object} node
 * @param {Node} parent node
 * @api public
 */

exports.create = function(node, parent) {
  return new nodes[node.type](node, parent);
};
