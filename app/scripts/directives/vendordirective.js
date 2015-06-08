'use strict';

/**
 * @ngdoc directive
 * @name slApp.directive:VendorDirective
 * @description
 * # VendorDirective
 */
angular.module('slApp')
  .directive('VendorDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the VendorDirective directive');
      }
    };
  });
