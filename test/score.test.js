var files = [
  { name: '1.js', score: [3, 0] },
  { name: '2.js', score: [0] },
  { name: '3.js', score: [6, 3, 0] },
  { name: '4.js', score: [20] },
  { name: '5.js', score: [11] },
  { name: '6.js', score: [10] },
  { name: '7.js', score: [10] },
  { name: '8.js', score: [0] },
];

describe('score', function() {
  it('can calculate the score properly', function() {

    files.forEach(function(file) {
      var source = hell.processFile(fixture('score/' + file.name));
      var i = 0;

      source.eachContext(function(ctx) {
        ctx.score().should.eq(file.score[i]);
        i++;
      });

    });
  });
});
