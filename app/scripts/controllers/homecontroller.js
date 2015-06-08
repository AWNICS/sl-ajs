'use strict';

/**
 * @ngdoc function
 * @name slApp.controller:HomecontrollerCtrl
 * @description
 * # HomecontrollerCtrl
 * Controller of the slApp
 */
angular.module('slApp')
  .controller('HomecontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
