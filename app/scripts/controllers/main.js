'use strict';

/**
 * @ngdoc function
 * @name slApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slApp
 */
angular.module('slApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
