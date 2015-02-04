'use strict';

describe('Service: organizationsedit', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizationsedit;
  beforeEach(inject(function (_organizationsedit_) {
    organizationsedit = _organizationsedit_;
  }));

  it('should do something', function () {
    expect(!!organizationsedit).toBe(true);
  });

});
