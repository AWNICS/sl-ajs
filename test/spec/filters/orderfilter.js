'use strict';

describe('Filter: OrderFilter', function () {

  // load the filter's module
  beforeEach(module('slApp'));

  // initialize a new instance of the filter before each test
  var OrderFilter;
  beforeEach(inject(function ($filter) {
    OrderFilter = $filter('OrderFilter');
  }));

  it('should return the input prefixed with "OrderFilter filter:"', function () {
    var text = 'angularjs';
    expect(OrderFilter(text)).toBe('OrderFilter filter: ' + text);
  });

});
