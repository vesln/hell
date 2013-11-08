/**
 * Core dependencies.
 */

var join = require('path').join;

/**
 * External dependencies.
 */

var chai = require('chai');

/**
 * Internal dependencies.
 */

global.hell = require('../..');

/**
 * Register `should`.
 */

global.should = chai.should();

/**
 * Include stack traces.
 */

chai.Assertion.includeStack = true;

/**
 * Return path to a fixture.
 *
 * @param {String} path
 * @returns {String}
 * @api public
 */

global.fixture = function(extra) {
  return join(__dirname, '..', 'fixtures', extra);
};
