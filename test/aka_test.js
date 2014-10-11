/*global describe,it*/
'use strict';

var assert = require('assert');
var aka = require('../lib/aka.js');

describe('aka node module.', function() {
  it('must export', function() {
    assert(typeof aka.get(), 'string');
  });
});
