/* global angular */

'use strict';

/**
 * @ngdoc directive
 * @name slApp.directive:HomeDirective
 * @description
 * # HomeDirective
 */
angular.module('slApp')
  .directive('HomeDirective', ['$document', function($document) {

   function link(scope, element, attrs) {
      
      element.camera({
                    transPeriod: 500,
                    time: 2000,
                    height: '490px',
                    thumbnails: false,
                    pagination: true,
                    playPause: false,
                    loader: false,
                    navigation: false,
                    hover: false
                });
       console.log("Directing the Home Camera");
       element.text('this is the HomeDirective directive');
    }
  
  return {
    restrict: 'E',
    link: link
  };
}]);
