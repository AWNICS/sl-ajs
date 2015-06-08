'use strict';

/**
 * @ngdoc filter
 * @name slApp.filter:VendorFilter
 * @function
 * @description
 * # VendorFilter
 * Filter in the slApp.
 */
angular.module('slApp')
  .filter('VendorFilter', function () {
    return function (input) {
      return 'VendorFilter filter: ' + input;
    };
  });
