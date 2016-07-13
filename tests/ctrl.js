/*
 * ctrl.js - Mocha ctrl test
*/

/* jshint      node:  true, devel:  true, maxstatements: 5,
   maxerr: 50, nomen: true, regexp: true */

/* globals describe, it */

'use strict';

var assert = require('assert');

describe('Ctrl.getCtrl', function () {
  var dbHost = process.env.DB_HOST_TEST;
  var getCtrl = require('../app/ctrl').getCtrl;
  var User = getCtrl(dbHost, 'user', 'test');

  it('User should as an Object', function () {

    assert(typeof User === 'object');
  });

  it('User should same as User2', function () {
    var User2 = getCtrl(dbHost, 'user', 'test');
    assert.deepEqual(User, User2);
  });
});
