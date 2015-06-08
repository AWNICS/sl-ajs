'use strict';

/**
 * @ngdoc directive
 * @name slApp.directive:AuthenticationDirective
 * @description
 * # AuthenticationDirective
 */
angular.module('slApp')
  .directive('AuthenticationDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the AuthenticationDirective directive');
      }
    };
  });
