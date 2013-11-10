function Tree(sources, out) {
  this.out = out;
  this.sources = sources;
}

Tree.prototype.run = function() {
  var rows = [];

  this.sources.forEach(function(source) {
    source.walkContext(function(context, depth) {
      var signature = context.root()
        ? source.path
        : context.signature();

      var score = context.root()
        ? context.totalScore()
        : context.score();

      rows.push([
        '|' + Array(depth + 2).join('--'),
        score,
        signature,
      ]);
    });
    rows.push(['', '', '', '']);
  });

  rows.forEach(function(row) {
    this.print(row[0] + ' ' + row[1] + ' ' + row[2]);
  }, this);
};

/**
 * Print given `msg`.
 *
 * @param {String} msg
 * @param {Number} padding
 * @api private
 */

Tree.prototype.print = function(msg, padding) {
  padding = padding || 0;
  msg = msg || '';
  this.out.write(Array(padding).join(' ') + msg + '\n');
};

module.exports = Tree;
