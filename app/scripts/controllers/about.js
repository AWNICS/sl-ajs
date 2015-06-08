'use strict';

/**
 * @ngdoc function
 * @name slApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the slApp
 */
angular.module('slApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
