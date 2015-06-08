'use strict';

describe('Controller: VendorcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('slApp'));

  var VendorcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendorcontrollerCtrl = $controller('VendorcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
