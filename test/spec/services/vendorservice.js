'use strict';

describe('Service: VendorService', function () {

  // load the service's module
  beforeEach(module('slApp'));

  // instantiate service
  var VendorService;
  beforeEach(inject(function (_VendorService_) {
    VendorService = _VendorService_;
  }));

  it('should do something', function () {
    expect(!!VendorService).toBe(true);
  });

});
