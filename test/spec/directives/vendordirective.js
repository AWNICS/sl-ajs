'use strict';

describe('Directive: VendorDirective', function () {

  // load the directive's module
  beforeEach(module('slApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-vendor-directive></-vendor-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the VendorDirective directive');
  }));
});
