'use strict';

/**
 * @ngdoc filter
 * @name slApp.filter:OrderFilter
 * @function
 * @description
 * # OrderFilter
 * Filter in the slApp.
 */
angular.module('slApp')
  .filter('OrderFilter', function () {
    return function (input) {
      return 'OrderFilter filter: ' + input;
    };
  });
