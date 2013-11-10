/**
 * Internal dependencies.
 */

var syntax = require('../syntax');
var Noop = require('./noop');

/**
 * Analyzers.
 */

var analyzers = Object.create(null);

analyzers[syntax.Program] = require('./program');
analyzers[syntax.FunctionDeclaration] =
analyzers[syntax.FunctionExpression] = require('./func');
analyzers[syntax.IfStatement] = require('./if');
analyzers[syntax.CatchClause] = require('./catch');
analyzers[syntax.ForStatement] = require('./for');
analyzers[syntax.SwitchCase] = require('./case');
analyzers[syntax.ForInStatement] = require('./forin');
analyzers[syntax.WhileStatement] = require('./while');
analyzers[syntax.SwitchStatement] = require('./switch');
analyzers[syntax.DoWhileStatement] = require('./dowhile');
analyzers[syntax.LogicalExpression] = require('./logical');
analyzers[syntax.ConditionalExpression] = require('./conditional');

/**
 * Factory.
 *
 * @param {Object} node
 * @param {Object} parent node
 * @api public
 */

exports.create = function(node, parent) {
  if (!analyzers[node.type]) return new Noop(node);
  return new analyzers[node.type](node, parent);
};
