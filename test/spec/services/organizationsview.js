'use strict';

describe('Service: organizationsview', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizationsview;
  beforeEach(inject(function (_organizationsview_) {
    organizationsview = _organizationsview_;
  }));

  it('should do something', function () {
    expect(!!organizationsview).toBe(true);
  });

});
