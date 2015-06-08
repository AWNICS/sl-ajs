'use strict';

describe('Filter: VendorFilter', function () {

  // load the filter's module
  beforeEach(module('slApp'));

  // initialize a new instance of the filter before each test
  var VendorFilter;
  beforeEach(inject(function ($filter) {
    VendorFilter = $filter('VendorFilter');
  }));

  it('should return the input prefixed with "VendorFilter filter:"', function () {
    var text = 'angularjs';
    expect(VendorFilter(text)).toBe('VendorFilter filter: ' + text);
  });

});
