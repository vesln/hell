module.exports = process.env.HELL_COV
  ? require('./lib-cov/hell')
  : require('./lib/hell');
