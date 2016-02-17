module.exports = (function verifyNodeVersion () {
  'use strict';

  var _ = require('lodash');
  var Promise = require('es6-promise').Promise;

  fetchPackageJson()
  .then(checkForEnginesParameter)
  .then(verifyNodeVersion)
  .then(success, fail);

  return;

  function success () {
    return true;
  }

  function fail (err) {
    console.log('Error: ', err);
    return process.exit(1);
  }

  function verifyNodeVersion (data) {
    return new Promise(function (resolve, reject) {
      if (process.version === data) {
        resolve();
      } else {
        reject('Incorrect node version\n' +
          '`package.json` specifies `' + data + '`, ' +
          'you’re currently running `' + process.version + '`.\n' +
          'Run `nvm install ' + data + ' && nvm use ' + data + '`');
      }
    });
  }

  function checkForEnginesParameter (data) {
    return new Promise(function (resolve, reject) {
      var version = _.result(data, 'engines.node');
      if (version) {
        resolve(version);
      } else {
        reject('Missing or improper `engines` parameter in `package.json`');
      }
    });
  }

  function fetchPackageJson () {
    return new Promise(function (resolve, reject) {
      try {
        resolve(require('../../package.json'));
      } catch (e) {
        reject('Missing `package.json`');
      }
    });
  }
})();
