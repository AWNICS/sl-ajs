'use strict';

/**
 * @ngdoc filter
 * @name slApp.filter:HomeFilter
 * @function
 * @description
 * # HomeFilter
 * Filter in the slApp.
 */
angular.module('slApp')
  .filter('HomeFilter', function () {
    return function (input) {
      return 'HomeFilter filter: ' + input;
    };
  });
