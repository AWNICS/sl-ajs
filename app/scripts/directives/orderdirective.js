'use strict';

/**
 * @ngdoc directive
 * @name slApp.directive:OrderDirective
 * @description
 * # OrderDirective
 */
angular.module('slApp')
  .directive('OrderDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the OrderDirective directive');
      }
    };
  });
