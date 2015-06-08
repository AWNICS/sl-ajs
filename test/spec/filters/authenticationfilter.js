'use strict';

describe('Filter: AuthenticationFilter', function () {

  // load the filter's module
  beforeEach(module('slApp'));

  // initialize a new instance of the filter before each test
  var AuthenticationFilter;
  beforeEach(inject(function ($filter) {
    AuthenticationFilter = $filter('AuthenticationFilter');
  }));

  it('should return the input prefixed with "AuthenticationFilter filter:"', function () {
    var text = 'angularjs';
    expect(AuthenticationFilter(text)).toBe('AuthenticationFilter filter: ' + text);
  });

});
