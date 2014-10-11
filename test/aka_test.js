/*global describe,it*/
'use strict';
var assert = require('assert'),
  aka = require('../lib/aka.js');

describe('aka node module.', function() {
  it('must be awesome', function() {
    assert( aka.awesome(), 'awesome');
  });
});
