/**
 * Internal dependencies.
 */

var Formatter = require('../formatter');

/**
 * Json formatter.
 *
 * @constructor
 */

var Json = Formatter.extend();

/**
 * Run the formatter.
 *
 * @api public
 */

Json.prototype.run = function() {
  var out = [];

  this.sources.forEach(function(source) {
    var group = { path: source.path, contexts: [] };
    source.eachContext(function(context) {
      group.contexts.push(context.toJSON());
    });
    out.push(group);
  });

  this.print(JSON.stringify(out, null, 2));
};

/**
 * Primary export.
 */

module.exports = Json;
