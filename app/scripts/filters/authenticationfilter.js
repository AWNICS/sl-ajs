'use strict';

/**
 * @ngdoc filter
 * @name slApp.filter:AuthenticationFilter
 * @function
 * @description
 * # AuthenticationFilter
 * Filter in the slApp.
 */
angular.module('slApp')
  .filter('AuthenticationFilter', function () {
    return function (input) {
      return 'AuthenticationFilter filter: ' + input;
    };
  });
