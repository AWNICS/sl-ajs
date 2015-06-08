'use strict';

describe('Filter: HomeFilter', function () {

  // load the filter's module
  beforeEach(module('slApp'));

  // initialize a new instance of the filter before each test
  var HomeFilter;
  beforeEach(inject(function ($filter) {
    HomeFilter = $filter('HomeFilter');
  }));

  it('should return the input prefixed with "HomeFilter filter:"', function () {
    var text = 'angularjs';
    expect(HomeFilter(text)).toBe('HomeFilter filter: ' + text);
  });

});
